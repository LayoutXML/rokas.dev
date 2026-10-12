---
title: AppListManager
order: 1
type: Java, Android (library, app)
summary: AppListManager is an easy to use Android library, which minimizes developing time when working with application or activity lists.
logo: ../../assets/logos/applistmanager.png
links:
  - kind: google-play
    url: https://play.google.com/store/apps/details?id=com.layoutxml.applistmanager
  - kind: github
    url: https://github.com/LayoutXML/AppListManager
playBadgeUrl: https://play.google.com/store/apps/details?id=com.layoutxml.applistmanager&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1
---

[![Android Arsenal](https://img.shields.io/badge/Android%20Arsenal-AppListManager-green.svg?style=flat)](https://android-arsenal.com/details/1/7143)
[![Build Status](https://travis-ci.org/LayoutXML/AppListManager.svg?branch=master)](https://travis-ci.org/LayoutXML/AppListManager)
[![GitHub](https://img.shields.io/github/license/LayoutXML/AppListManager.svg)](https://github.com/LayoutXML/AppListManager/blob/master/LICENSE)
[![Version](https://jitpack.io/v/LayoutXML/AppListManager.svg)](https://jitpack.io/#LayoutXML/AppListManager)
![API](https://img.shields.io/badge/API-14%2B-brightgreen.svg?style=flat)
[![Donate](https://img.shields.io/badge/%24-Donate-blue.svg)](https://github.com/LayoutXML/AppListManager#donate)

AppListManager is easy to use Android library, which minimizes developing time when working on application or activity lists. You no longer have to worry about asynchronous tasks, memory leaks and intent receivers. This library provides a simple way to receive application and activity lists as they change.

To receive application and activity lists using this library you must implement listeners and invoke methods. Additionally, to receive these lists automatically you must also register a receiver (in the manifest file and code). All listeners must be registered, and all unfinished tasks must be destroyed. Guide below explains exactly how to do all that. You can also inspect the included sample app that uses most of the features.

[Download sample app from the Google Play store](https://play.google.com/store/apps/details?id=com.layoutxml.applistmanager).

**Step 1: Add the JitPack repository in your root build.gradle at the end of repositories:**

```
allprojects {
    repositories {
        ...
          maven { url 'https://jitpack.io' }
    }
}
```

**Step 2. Add the dependency:**

```
dependencies {
    implementation 'com.github.LayoutXML:AppListManager:2.1.0'
}
```

Follow the steps on the GitHub repository to implement this library in your project.
