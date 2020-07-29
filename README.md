###Cypress Framework which have support of below utilities
```Fixture```
```X-path```
```Session Storage```
```Rest API Calls```
```Dynamic Environment```
```Video recording```
```Screen Recording```

Software Requirement
node package
Cypress
Any editor
Browser installed

###For the covered automation case please refer 'Automation Scope' Tab for the given link
https://docs.google.com/spreadsheets/d/1ko_IAb67QHY0arpU-Fyiko21ajmBfjr_13icQKJyUz8/edit?pli=1#gid=1526836734

**Overall status**

Creation of airmeet
Multisession
Singlesession
Skipped Flow

#####DashBoard validation which include
Creation of multisession Airmeet, Editing Host Details, Addition Speaker, Addition of Session,  Branding

Added more validation on Airmeet Dashboard
1) Added new validation point for host validation(unique name validation)
2) Added new validation Speaker Error validation (All mandate field validation)
3) Added new validation Session Error validation(All mandate field validation)
4) Added new validation Speaker validation (validated indivisual field after editing)

#####Speaker flow
CM creates a new multisession airmeet -> 
Host make the Event Live -> speaker joins using speaker link -> 
Social lounge validation -> Backstage validation(Right side + bottom side) Then exit

#####Host flow
CM creates a new multisession airmeet -> making Event Live
Social lounger validation -> Go to Backstage -> validation right side automation -> Make Session Live
Backstage validation(Right side + bottom side) -> End Session -> Validate(Right side + bottom side) ->  Then exit
