# Document Information

This is mainly a guidance document, and outlines the exposed API objects which **are planned** to be implemented. Note this does not mean they are or will be implemented, but rather it provides a general structure which I would like to see created. The general structure is largely influenced by how Excel's object structure is represented. I believe this is a great object oriented structure, and Microsoft has done great with it. It also follows a similar object structure to HTML applications, as these too often have great object structures.

## Overview of syntax

### General notes

Elements begginning with a capital letter are to be interprated as objects or classes containing children, properties or methods:

```
MyObject
```

### Parent child relationship

Here is a parent object containing 2 children:

```
Parent
├── child 1
└── child 2
```

If a parent is to contain an undecided or indefinite number of children then `...` is used:

```
Parent
├── child 1
├── child 2
...
```

Methods prototyped to an object have parenthesis at the end:

```
Object
├── myProperty
└── myMethod()
```

If an object extends some other class then square brackets are used. For example a class which extends the array class:

```
Collection
└── [Array]
```

Sometimes the structure may deviate away from the above rules, to keep a convention. In these cases it will be made obvious. In the below case `defDurations` should be written as `DefDurations` as it is an object. However by convention set out by it's siblings, it is prefered as `defDurations`. To make it obvious we show that it extends the Array class:

```
Timeline
├── defTransition
├── defTrackHeight
├── defActionCurve
└── defDurations
    └── [Array]
```

Sometimes it is desired, within a collection or array of a certain type of object, to show that these types only exist in the object. To do so `<` and `>` are used:

```
Windows
├── <ClassName ID>
├── <Window 1>
└── <Window 2>
```

Finally if it is desired to show that something can be any of a specific list of values `: [val1,val2,val3]` syntax can be used:

```
Number
└── type: ["small","integer","long","float","double"]
```

# Screenflow class

The ScreenFlow Application object is the entry point for all applications which use the ScreenFlow JXA API.

```
Screenflow
├── version
├── versionNames
├── Preferences
│   ├── General
│   │   ├── Settings
│   │   │   ├── helperVisibility
│   │   │   ├── countdown
│   │   │   └── diagnostics
│   ├── Timeline
│   │   ├── Display
│   │   |   ├── smpte
│   │   │   ├── inClipActionMenuOverlays
│   │   │   └── sterioWaveforms
│   │   ├── defTransition
│   │   ├── defTrackHeight
│   │   ├── defActionCurve
│   │   └── defDurations
│   │       └── [Array]
|   ...
├── Projects
|   ├── <Project 1>
|   ├── <Project 2>
|   ├── activeProject()
|   ├── open()
|   └── [Array]
...
```

# Project class

The project class controls everything to do with a particular project.

```
Project
├── name
├── path
├── Canvas
│   ├── width
│   ├── height
│   ├── color
│   └── reset()
├── Clips??
├── Activate()
├── export(options)
├── Markers
|   ├── <Marker 1>
|   ├── <Marker 2>
│   └── [Array]
├── Media
|   ├── <Video 1>
|   ├── <Video 2>
│   └── [Array]
└── selectedClip
```

# Clip class

The clip class controls everything about a particular clip. Until a method of selecting clips in a stable manor is implemented (or a way to edit arbitrary clips), this class will only be retrievable via the SelectedClip object.

```
Clip
├── type: ["video","audio","recording","annotation","text"]
├── hasAudio
├── Video
├── Audio
├── VideoMotion
├── ScreenRecording
├── Callout
├── TouchCallout
├── Annotation
└── Text
```

# Video class

```
Video
├── parent
├── Actions
├── scale
├── Pos
|   ├── x
|   └── y
├── Rot
|   ├── x
|   ├── y
|   └── z
├── opacity
├── Crop
|   ├── left
|   ├── right
|   ├── top
|   ├── bottom
|   └── [UI Element]
├── Reflection
|   ├── on
|   └── value
├── corner
├── Shadow
|   ├── on
|   ├── angle
|   ├── color
|   ├── offset
|   ├── opacity
|   └── blur
├── Color
|   ├── saturation
|   ├── brightness
|   ├── contrast
|   └── [UI Element]
├── Filters
|   ├── <filter 1>
|   ├── <filter 2>
|   ├── ...
|   ├── el
|   |   └── [UI Element]
|   └── [Array]
```
