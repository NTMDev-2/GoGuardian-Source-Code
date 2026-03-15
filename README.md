# GoGuardian-Source-Code
**THIS IS ONLY A FRONT-END LEAK**
GoGuardian has been terroizing students from Day 1. 

When a kid wants to play a game, or maybe accidentally search up a "flagged term", GoGuardian will scrutinize every bit of it. 

Me, as a student in a school, has disliked this monitoring tool a lot. So, me and some other friends decided to use an oversight in GoGuardian to retrieve all of its source code, documented here.

Read more about how GoGuardian is a [terrible monitoring product](https://www.eff.org/deeplinks/2023/10/how-goguardian-invades-student-privacy). 
Most statements that EFF claims about the techinical side of GoGuardian has been proven true by this source code leak. 

## Reading GoGuardian Info
When you visit a page that has been blocked by GoGuardian, it will end with ?ctx={...}
To gain information about this block and the reason for it, copy the ENTIRE part after the "=". Then, put this into a [Base64 decoder](https://www.base64decode.org/), which will reveal hidden meta data about the current restricted site. 

## The GoGuardian Documentation
For a detailed explanation on GoGuardian and how it works, go to this [Google Doc](https://docs.google.com/document/d/1-RSrTeqruhyV51QhjgsJUHuXVKc3sQymY87V9Uiqomo/edit?usp=sharing).
