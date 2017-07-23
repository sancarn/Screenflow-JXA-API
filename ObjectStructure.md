# Document Information

This is mainly a guidance document, and outlines the exposed API objects which **are planned** to be implemented. Note this does not mean they are or will be implemented, but rather it provides a general structure which I would like to see created. The general structure is largely influenced by how Excel's object structure is represented. I believe this is a great object oriented structure, and Microsoft has done great with it. It also follows a similar object structure to HTML applications, as these too often have great object structures.

# Screenflow class

The ScreenFlow Application object is the entry point for all applications which use the ScreenFlow JXA API.

Screenflow
├── Preferences
│   ├── General
│   │   ├── Settings
│   │   │   ├── SFHelperVisibility
│   │   │   ├── Countdown
│   │   │   └── Diagnostics
│   ├── Timeline
│   │   ├── Display
│   │   |   ├── SMPTE
│   │   │   ├── InClipActionMenuOverlays
│   │   │   └── SterioWaveforms
│   │   ├── DefTransition
│   │   ├── DefTrackHeight
│   │   ├── DefActionCurve
│   │   └── DefDurations
│   │       ├── Type: Duration
│   │       └── ...
|   ...
├── Projects
|   ├── <Window1 Name>
|   ├── <Window2 Name>
|   ├── ...
|   ├── ActiveProject()
|   └── [Array]
...

# Project class

The project class controls everything to do with a particular project.

```
Project
├── Canvas
│   ├── Width
│   ├── Height
│   ├── Color
│   └── Reset()
├── Clips??
├── Activate()
├── Export(options)
├── Markers
|   ├── <Marker 1>
|   ├── <Marker 2>
|   ├── ...
│   └── [Array]
├── Media
|   ├── <Video 1>
|   ├── <Video 2>
|   ├── ...
│   └── [Array]
└── SelectedClip
```

# Clip class

The clip class controls everything about a particular clip. Until a method of selecting clips in a stable manor is implemented (or a way to edit arbitrary clips), this class will only be retrievable via the SelectedClip object.

```
Clip
├── Type: ["video","audio","recording","annotation","text"]
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
