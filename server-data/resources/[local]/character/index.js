!function(e){var t={};function n(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(o,i,function(t){return e[t]}.bind(null,i));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);let o=new Map,i=0;function a(e){return o.set(i,e),0===i&&setTick(()=>{for(const e of o.values())e()}),i++}function l(e){o.delete(e)}function r(e,t=0){return()=>new Promise(n=>{!function o(){e()?n():setTimeout(o,t)}()})}function c(e){return new Promise(t=>setTimeout(t,e))}function h(e,t,n,o){return function(i,a){return DrawSprite(n,o,i,a+t/2,e,t,0,255,255,255,255),a+t}}const d="L".charCodeAt(0),p="T".charCodeAt(0);function s(...e){return function(t,n){SetScriptGfxAlign(d,p);for(const o of e)n=o(t,n);ResetScriptGfxAlign()}}function u(...e){return function(t,n){let o=0;for(const i of e)o=Math.max(i(t,n),o);return o}}function S(e,t,n,o,i,a){return function(l,r){return DrawRect(l,r+t/2,e,t,n,o,i,a),r+t}}function y(e){return function(t,n){return n+e}}let R;function m(e,t,n,o,i,a=R.Left){return function(l,r){BeginTextCommandDisplayText("STRING"),SetTextFont(o),SetTextColour(255,255,255,255),SetTextScale(i,i),a===R.Right&&(SetTextWrap(0,1.03*e),SetTextJustification(2)),AddTextComponentSubstringPlayerName(n);const c=GetTextScaleHeight(i,o)/4;return EndTextCommandDisplayText(a===R.Center?l:l-e/2+.004,r+c),r+t}}function C(e,t,n){return u(S(e,t,44,110,184,255),m(e,t,n,1,.9))}var V;!function(e){e[e.Left=0]="Left",e[e.Right=1]="Right",e[e.Center=2]="Center"}(R||(R={})),function(e){e[e.NextCamera=0]="NextCamera",e[e.LookLeftRight=1]="LookLeftRight",e[e.LookUpDown=2]="LookUpDown",e[e.LookUpOnly=3]="LookUpOnly",e[e.LookDownOnly=4]="LookDownOnly",e[e.LookLeftOnly=5]="LookLeftOnly",e[e.LookRightOnly=6]="LookRightOnly",e[e.CinematicSlowMo=7]="CinematicSlowMo",e[e.FlyUpDown=8]="FlyUpDown",e[e.FlyLeftRight=9]="FlyLeftRight",e[e.ScriptedFlyZUp=10]="ScriptedFlyZUp",e[e.ScriptedFlyZDown=11]="ScriptedFlyZDown",e[e.WeaponWheelUpDown=12]="WeaponWheelUpDown",e[e.WeaponWheelLeftRight=13]="WeaponWheelLeftRight",e[e.WeaponWheelNext=14]="WeaponWheelNext",e[e.WeaponWheelPrev=15]="WeaponWheelPrev",e[e.SelectNextWeapon=16]="SelectNextWeapon",e[e.SelectPrevWeapon=17]="SelectPrevWeapon",e[e.SkipCutscene=18]="SkipCutscene",e[e.CharacterWheel=19]="CharacterWheel",e[e.MultiplayerInfo=20]="MultiplayerInfo",e[e.Sprint=21]="Sprint",e[e.Jump=22]="Jump",e[e.Enter=23]="Enter",e[e.Attack=24]="Attack",e[e.Aim=25]="Aim",e[e.LookBehind=26]="LookBehind",e[e.Phone=27]="Phone",e[e.SpecialAbility=28]="SpecialAbility",e[e.SpecialAbilitySecondary=29]="SpecialAbilitySecondary",e[e.MoveLeftRight=30]="MoveLeftRight",e[e.MoveUpDown=31]="MoveUpDown",e[e.MoveUpOnly=32]="MoveUpOnly",e[e.MoveDownOnly=33]="MoveDownOnly",e[e.MoveLeftOnly=34]="MoveLeftOnly",e[e.MoveRightOnly=35]="MoveRightOnly",e[e.Duck=36]="Duck",e[e.SelectWeapon=37]="SelectWeapon",e[e.Pickup=38]="Pickup",e[e.SniperZoom=39]="SniperZoom",e[e.SniperZoomInOnly=40]="SniperZoomInOnly",e[e.SniperZoomOutOnly=41]="SniperZoomOutOnly",e[e.SniperZoomInSecondary=42]="SniperZoomInSecondary",e[e.SniperZoomOutSecondary=43]="SniperZoomOutSecondary",e[e.Cover=44]="Cover",e[e.Reload=45]="Reload",e[e.Talk=46]="Talk",e[e.Detonate=47]="Detonate",e[e.HUDSpecial=48]="HUDSpecial",e[e.Arrest=49]="Arrest",e[e.AccurateAim=50]="AccurateAim",e[e.Context=51]="Context",e[e.ContextSecondary=52]="ContextSecondary",e[e.WeaponSpecial=53]="WeaponSpecial",e[e.WeaponSpecial2=54]="WeaponSpecial2",e[e.Dive=55]="Dive",e[e.DropWeapon=56]="DropWeapon",e[e.DropAmmo=57]="DropAmmo",e[e.ThrowGrenade=58]="ThrowGrenade",e[e.VehicleMoveLeftRight=59]="VehicleMoveLeftRight",e[e.VehicleMoveUpDown=60]="VehicleMoveUpDown",e[e.VehicleMoveUpOnly=61]="VehicleMoveUpOnly",e[e.VehicleMoveDownOnly=62]="VehicleMoveDownOnly",e[e.VehicleMoveLeftOnly=63]="VehicleMoveLeftOnly",e[e.VehicleMoveRightOnly=64]="VehicleMoveRightOnly",e[e.VehicleSpecial=65]="VehicleSpecial",e[e.VehicleGunLeftRight=66]="VehicleGunLeftRight",e[e.VehicleGunUpDown=67]="VehicleGunUpDown",e[e.VehicleAim=68]="VehicleAim",e[e.VehicleAttack=69]="VehicleAttack",e[e.VehicleAttack2=70]="VehicleAttack2",e[e.VehicleAccelerate=71]="VehicleAccelerate",e[e.VehicleBrake=72]="VehicleBrake",e[e.VehicleDuck=73]="VehicleDuck",e[e.VehicleHeadlight=74]="VehicleHeadlight",e[e.VehicleExit=75]="VehicleExit",e[e.VehicleHandbrake=76]="VehicleHandbrake",e[e.VehicleHotwireLeft=77]="VehicleHotwireLeft",e[e.VehicleHotwireRight=78]="VehicleHotwireRight",e[e.VehicleLookBehind=79]="VehicleLookBehind",e[e.VehicleCinCam=80]="VehicleCinCam",e[e.VehicleNextRadio=81]="VehicleNextRadio",e[e.VehiclePrevRadio=82]="VehiclePrevRadio",e[e.VehicleNextRadioTrack=83]="VehicleNextRadioTrack",e[e.VehiclePrevRadioTrack=84]="VehiclePrevRadioTrack",e[e.VehicleRadioWheel=85]="VehicleRadioWheel",e[e.VehicleHorn=86]="VehicleHorn",e[e.VehicleFlyThrottleUp=87]="VehicleFlyThrottleUp",e[e.VehicleFlyThrottleDown=88]="VehicleFlyThrottleDown",e[e.VehicleFlyYawLeft=89]="VehicleFlyYawLeft",e[e.VehicleFlyYawRight=90]="VehicleFlyYawRight",e[e.VehiclePassengerAim=91]="VehiclePassengerAim",e[e.VehiclePassengerAttack=92]="VehiclePassengerAttack",e[e.VehicleSpecialAbilityFranklin=93]="VehicleSpecialAbilityFranklin",e[e.VehicleStuntUpDown=94]="VehicleStuntUpDown",e[e.VehicleCinematicUpDown=95]="VehicleCinematicUpDown",e[e.VehicleCinematicUpOnly=96]="VehicleCinematicUpOnly",e[e.VehicleCinematicDownOnly=97]="VehicleCinematicDownOnly",e[e.VehicleCinematicLeftRight=98]="VehicleCinematicLeftRight",e[e.VehicleSelectNextWeapon=99]="VehicleSelectNextWeapon",e[e.VehicleSelectPrevWeapon=100]="VehicleSelectPrevWeapon",e[e.VehicleRoof=101]="VehicleRoof",e[e.VehicleJump=102]="VehicleJump",e[e.VehicleGrapplingHook=103]="VehicleGrapplingHook",e[e.VehicleShuffle=104]="VehicleShuffle",e[e.VehicleDropProjectile=105]="VehicleDropProjectile",e[e.VehicleMouseControlOverride=106]="VehicleMouseControlOverride",e[e.VehicleFlyRollLeftRight=107]="VehicleFlyRollLeftRight",e[e.VehicleFlyRollLeftOnly=108]="VehicleFlyRollLeftOnly",e[e.VehicleFlyRollRightOnly=109]="VehicleFlyRollRightOnly",e[e.VehicleFlyPitchUpDown=110]="VehicleFlyPitchUpDown",e[e.VehicleFlyPitchUpOnly=111]="VehicleFlyPitchUpOnly",e[e.VehicleFlyPitchDownOnly=112]="VehicleFlyPitchDownOnly",e[e.VehicleFlyUnderCarriage=113]="VehicleFlyUnderCarriage",e[e.VehicleFlyAttack=114]="VehicleFlyAttack",e[e.VehicleFlySelectNextWeapon=115]="VehicleFlySelectNextWeapon",e[e.VehicleFlySelectPrevWeapon=116]="VehicleFlySelectPrevWeapon",e[e.VehicleFlySelectTargetLeft=117]="VehicleFlySelectTargetLeft",e[e.VehicleFlySelectTargetRight=118]="VehicleFlySelectTargetRight",e[e.VehicleFlyVerticalFlightMode=119]="VehicleFlyVerticalFlightMode",e[e.VehicleFlyDuck=120]="VehicleFlyDuck",e[e.VehicleFlyAttackCamera=121]="VehicleFlyAttackCamera",e[e.VehicleFlyMouseControlOverride=122]="VehicleFlyMouseControlOverride",e[e.VehicleSubTurnLeftRight=123]="VehicleSubTurnLeftRight",e[e.VehicleSubTurnLeftOnly=124]="VehicleSubTurnLeftOnly",e[e.VehicleSubTurnRightOnly=125]="VehicleSubTurnRightOnly",e[e.VehicleSubPitchUpDown=126]="VehicleSubPitchUpDown",e[e.VehicleSubPitchUpOnly=127]="VehicleSubPitchUpOnly",e[e.VehicleSubPitchDownOnly=128]="VehicleSubPitchDownOnly",e[e.VehicleSubThrottleUp=129]="VehicleSubThrottleUp",e[e.VehicleSubThrottleDown=130]="VehicleSubThrottleDown",e[e.VehicleSubAscend=131]="VehicleSubAscend",e[e.VehicleSubDescend=132]="VehicleSubDescend",e[e.VehicleSubTurnHardLeft=133]="VehicleSubTurnHardLeft",e[e.VehicleSubTurnHardRight=134]="VehicleSubTurnHardRight",e[e.VehicleSubMouseControlOverride=135]="VehicleSubMouseControlOverride",e[e.VehiclePushbikePedal=136]="VehiclePushbikePedal",e[e.VehiclePushbikeSprint=137]="VehiclePushbikeSprint",e[e.VehiclePushbikeFrontBrake=138]="VehiclePushbikeFrontBrake",e[e.VehiclePushbikeRearBrake=139]="VehiclePushbikeRearBrake",e[e.MeleeAttackLight=140]="MeleeAttackLight",e[e.MeleeAttackHeavy=141]="MeleeAttackHeavy",e[e.MeleeAttackAlternate=142]="MeleeAttackAlternate",e[e.MeleeBlock=143]="MeleeBlock",e[e.ParachuteDeploy=144]="ParachuteDeploy",e[e.ParachuteDetach=145]="ParachuteDetach",e[e.ParachuteTurnLeftRight=146]="ParachuteTurnLeftRight",e[e.ParachuteTurnLeftOnly=147]="ParachuteTurnLeftOnly",e[e.ParachuteTurnRightOnly=148]="ParachuteTurnRightOnly",e[e.ParachutePitchUpDown=149]="ParachutePitchUpDown",e[e.ParachutePitchUpOnly=150]="ParachutePitchUpOnly",e[e.ParachutePitchDownOnly=151]="ParachutePitchDownOnly",e[e.ParachuteBrakeLeft=152]="ParachuteBrakeLeft",e[e.ParachuteBrakeRight=153]="ParachuteBrakeRight",e[e.ParachuteSmoke=154]="ParachuteSmoke",e[e.ParachutePrecisionLanding=155]="ParachutePrecisionLanding",e[e.Map=156]="Map",e[e.SelectWeaponUnarmed=157]="SelectWeaponUnarmed",e[e.SelectWeaponMelee=158]="SelectWeaponMelee",e[e.SelectWeaponHandgun=159]="SelectWeaponHandgun",e[e.SelectWeaponShotgun=160]="SelectWeaponShotgun",e[e.SelectWeaponSmg=161]="SelectWeaponSmg",e[e.SelectWeaponAutoRifle=162]="SelectWeaponAutoRifle",e[e.SelectWeaponSniper=163]="SelectWeaponSniper",e[e.SelectWeaponHeavy=164]="SelectWeaponHeavy",e[e.SelectWeaponSpecial=165]="SelectWeaponSpecial",e[e.SelectCharacterMichael=166]="SelectCharacterMichael",e[e.SelectCharacterFranklin=167]="SelectCharacterFranklin",e[e.SelectCharacterTrevor=168]="SelectCharacterTrevor",e[e.SelectCharacterMultiplayer=169]="SelectCharacterMultiplayer",e[e.SaveReplayClip=170]="SaveReplayClip",e[e.SpecialAbilityPC=171]="SpecialAbilityPC",e[e.PhoneUp=172]="PhoneUp",e[e.PhoneDown=173]="PhoneDown",e[e.PhoneLeft=174]="PhoneLeft",e[e.PhoneRight=175]="PhoneRight",e[e.PhoneSelect=176]="PhoneSelect",e[e.PhoneCancel=177]="PhoneCancel",e[e.PhoneOption=178]="PhoneOption",e[e.PhoneExtraOption=179]="PhoneExtraOption",e[e.PhoneScrollForward=180]="PhoneScrollForward",e[e.PhoneScrollBackward=181]="PhoneScrollBackward",e[e.PhoneCameraFocusLock=182]="PhoneCameraFocusLock",e[e.PhoneCameraGrid=183]="PhoneCameraGrid",e[e.PhoneCameraSelfie=184]="PhoneCameraSelfie",e[e.PhoneCameraDOF=185]="PhoneCameraDOF",e[e.PhoneCameraExpression=186]="PhoneCameraExpression",e[e.FrontendDown=187]="FrontendDown",e[e.FrontendUp=188]="FrontendUp",e[e.FrontendLeft=189]="FrontendLeft",e[e.FrontendRight=190]="FrontendRight",e[e.FrontendRdown=191]="FrontendRdown",e[e.FrontendRup=192]="FrontendRup",e[e.FrontendRleft=193]="FrontendRleft",e[e.FrontendRright=194]="FrontendRright",e[e.FrontendAxisX=195]="FrontendAxisX",e[e.FrontendAxisY=196]="FrontendAxisY",e[e.FrontendRightAxisX=197]="FrontendRightAxisX",e[e.FrontendRightAxisY=198]="FrontendRightAxisY",e[e.FrontendPause=199]="FrontendPause",e[e.FrontendPauseAlternate=200]="FrontendPauseAlternate",e[e.FrontendAccept=201]="FrontendAccept",e[e.FrontendCancel=202]="FrontendCancel",e[e.FrontendX=203]="FrontendX",e[e.FrontendY=204]="FrontendY",e[e.FrontendLb=205]="FrontendLb",e[e.FrontendRb=206]="FrontendRb",e[e.FrontendLt=207]="FrontendLt",e[e.FrontendRt=208]="FrontendRt",e[e.FrontendLs=209]="FrontendLs",e[e.FrontendRs=210]="FrontendRs",e[e.FrontendLeaderboard=211]="FrontendLeaderboard",e[e.FrontendSocialClub=212]="FrontendSocialClub",e[e.FrontendSocialClubSecondary=213]="FrontendSocialClubSecondary",e[e.FrontendDelete=214]="FrontendDelete",e[e.FrontendEndscreenAccept=215]="FrontendEndscreenAccept",e[e.FrontendEndscreenExpand=216]="FrontendEndscreenExpand",e[e.FrontendSelect=217]="FrontendSelect",e[e.ScriptLeftAxisX=218]="ScriptLeftAxisX",e[e.ScriptLeftAxisY=219]="ScriptLeftAxisY",e[e.ScriptRightAxisX=220]="ScriptRightAxisX",e[e.ScriptRightAxisY=221]="ScriptRightAxisY",e[e.ScriptRUp=222]="ScriptRUp",e[e.ScriptRDown=223]="ScriptRDown",e[e.ScriptRLeft=224]="ScriptRLeft",e[e.ScriptRRight=225]="ScriptRRight",e[e.ScriptLB=226]="ScriptLB",e[e.ScriptRB=227]="ScriptRB",e[e.ScriptLT=228]="ScriptLT",e[e.ScriptRT=229]="ScriptRT",e[e.ScriptLS=230]="ScriptLS",e[e.ScriptRS=231]="ScriptRS",e[e.ScriptPadUp=232]="ScriptPadUp",e[e.ScriptPadDown=233]="ScriptPadDown",e[e.ScriptPadLeft=234]="ScriptPadLeft",e[e.ScriptPadRight=235]="ScriptPadRight",e[e.ScriptSelect=236]="ScriptSelect",e[e.CursorAccept=237]="CursorAccept",e[e.CursorCancel=238]="CursorCancel",e[e.CursorX=239]="CursorX",e[e.CursorY=240]="CursorY",e[e.CursorScrollUp=241]="CursorScrollUp",e[e.CursorScrollDown=242]="CursorScrollDown",e[e.EnterCheatCode=243]="EnterCheatCode",e[e.InteractionMenu=244]="InteractionMenu",e[e.MpTextChatAll=245]="MpTextChatAll",e[e.MpTextChatTeam=246]="MpTextChatTeam",e[e.MpTextChatFriends=247]="MpTextChatFriends",e[e.MpTextChatCrew=248]="MpTextChatCrew",e[e.PushToTalk=249]="PushToTalk",e[e.CreatorLS=250]="CreatorLS",e[e.CreatorRS=251]="CreatorRS",e[e.CreatorLT=252]="CreatorLT",e[e.CreatorRT=253]="CreatorRT",e[e.CreatorMenuToggle=254]="CreatorMenuToggle",e[e.CreatorAccept=255]="CreatorAccept",e[e.CreatorDelete=256]="CreatorDelete",e[e.Attack2=257]="Attack2",e[e.RappelJump=258]="RappelJump",e[e.RappelLongJump=259]="RappelLongJump",e[e.RappelSmashWindow=260]="RappelSmashWindow",e[e.PrevWeapon=261]="PrevWeapon",e[e.NextWeapon=262]="NextWeapon",e[e.MeleeAttack1=263]="MeleeAttack1",e[e.MeleeAttack2=264]="MeleeAttack2",e[e.Whistle=265]="Whistle",e[e.MoveLeft=266]="MoveLeft",e[e.MoveRight=267]="MoveRight",e[e.MoveUp=268]="MoveUp",e[e.MoveDown=269]="MoveDown",e[e.LookLeft=270]="LookLeft",e[e.LookRight=271]="LookRight",e[e.LookUp=272]="LookUp",e[e.LookDown=273]="LookDown",e[e.SniperZoomIn=274]="SniperZoomIn",e[e.SniperZoomOut=275]="SniperZoomOut",e[e.SniperZoomInAlternate=276]="SniperZoomInAlternate",e[e.SniperZoomOutAlternate=277]="SniperZoomOutAlternate",e[e.VehicleMoveLeft=278]="VehicleMoveLeft",e[e.VehicleMoveRight=279]="VehicleMoveRight",e[e.VehicleMoveUp=280]="VehicleMoveUp",e[e.VehicleMoveDown=281]="VehicleMoveDown",e[e.VehicleGunLeft=282]="VehicleGunLeft",e[e.VehicleGunRight=283]="VehicleGunRight",e[e.VehicleGunUp=284]="VehicleGunUp",e[e.VehicleGunDown=285]="VehicleGunDown",e[e.VehicleLookLeft=286]="VehicleLookLeft",e[e.VehicleLookRight=287]="VehicleLookRight",e[e.ReplayStartStopRecording=288]="ReplayStartStopRecording",e[e.ReplayStartStopRecordingSecondary=289]="ReplayStartStopRecordingSecondary",e[e.ScaledLookLeftRight=290]="ScaledLookLeftRight",e[e.ScaledLookUpDown=291]="ScaledLookUpDown",e[e.ScaledLookUpOnly=292]="ScaledLookUpOnly",e[e.ScaledLookDownOnly=293]="ScaledLookDownOnly",e[e.ScaledLookLeftOnly=294]="ScaledLookLeftOnly",e[e.ScaledLookRightOnly=295]="ScaledLookRightOnly",e[e.ReplayMarkerDelete=296]="ReplayMarkerDelete",e[e.ReplayClipDelete=297]="ReplayClipDelete",e[e.ReplayPause=298]="ReplayPause",e[e.ReplayRewind=299]="ReplayRewind",e[e.ReplayFfwd=300]="ReplayFfwd",e[e.ReplayNewmarker=301]="ReplayNewmarker",e[e.ReplayRecord=302]="ReplayRecord",e[e.ReplayScreenshot=303]="ReplayScreenshot",e[e.ReplayHidehud=304]="ReplayHidehud",e[e.ReplayStartpoint=305]="ReplayStartpoint",e[e.ReplayEndpoint=306]="ReplayEndpoint",e[e.ReplayAdvance=307]="ReplayAdvance",e[e.ReplayBack=308]="ReplayBack",e[e.ReplayTools=309]="ReplayTools",e[e.ReplayRestart=310]="ReplayRestart",e[e.ReplayShowhotkey=311]="ReplayShowhotkey",e[e.ReplayCycleMarkerLeft=312]="ReplayCycleMarkerLeft",e[e.ReplayCycleMarkerRight=313]="ReplayCycleMarkerRight",e[e.ReplayFOVIncrease=314]="ReplayFOVIncrease",e[e.ReplayFOVDecrease=315]="ReplayFOVDecrease",e[e.ReplayCameraUp=316]="ReplayCameraUp",e[e.ReplayCameraDown=317]="ReplayCameraDown",e[e.ReplaySave=318]="ReplaySave",e[e.ReplayToggletime=319]="ReplayToggletime",e[e.ReplayToggletips=320]="ReplayToggletips",e[e.ReplayPreview=321]="ReplayPreview",e[e.ReplayToggleTimeline=322]="ReplayToggleTimeline",e[e.ReplayTimelinePickupClip=323]="ReplayTimelinePickupClip",e[e.ReplayTimelineDuplicateClip=324]="ReplayTimelineDuplicateClip",e[e.ReplayTimelinePlaceClip=325]="ReplayTimelinePlaceClip",e[e.ReplayCtrl=326]="ReplayCtrl",e[e.ReplayTimelineSave=327]="ReplayTimelineSave",e[e.ReplayPreviewAudio=328]="ReplayPreviewAudio",e[e.VehicleDriveLook=329]="VehicleDriveLook",e[e.VehicleDriveLook2=330]="VehicleDriveLook2",e[e.VehicleFlyAttack2=331]="VehicleFlyAttack2",e[e.RadioWheelUpDown=332]="RadioWheelUpDown",e[e.RadioWheelLeftRight=333]="RadioWheelLeftRight",e[e.VehicleSlowMoUpDown=334]="VehicleSlowMoUpDown",e[e.VehicleSlowMoUpOnly=335]="VehicleSlowMoUpOnly",e[e.VehicleSlowMoDownOnly=336]="VehicleSlowMoDownOnly",e[e.VehicleHydraulicsControlToggle=337]="VehicleHydraulicsControlToggle",e[e.VehicleHydraulicsControlLeft=338]="VehicleHydraulicsControlLeft",e[e.VehicleHydraulicsControlRight=339]="VehicleHydraulicsControlRight",e[e.VehicleHydraulicsControlUp=340]="VehicleHydraulicsControlUp",e[e.VehicleHydraulicsControlDown=341]="VehicleHydraulicsControlDown",e[e.VehicleHydraulicsControlUpDown=342]="VehicleHydraulicsControlUpDown",e[e.VehicleHydraulicsControlLeftRight=343]="VehicleHydraulicsControlLeftRight",e[e.SwitchVisor=344]="SwitchVisor",e[e.VehicleMeleeHold=345]="VehicleMeleeHold",e[e.VehicleMeleeLeft=346]="VehicleMeleeLeft",e[e.VehicleMeleeRight=347]="VehicleMeleeRight",e[e.MapPointOfInterest=348]="MapPointOfInterest",e[e.ReplaySnapmaticPhoto=349]="ReplaySnapmaticPhoto",e[e.VehicleCarJump=350]="VehicleCarJump",e[e.VehicleRocketBoost=351]="VehicleRocketBoost",e[e.VehicleFlyBoost=352]="VehicleFlyBoost",e[e.VehicleParachute=353]="VehicleParachute",e[e.VehicleBikeWings=354]="VehicleBikeWings",e[e.VehicleFlyBombBay=355]="VehicleFlyBombBay",e[e.VehicleFlyCounter=356]="VehicleFlyCounter",e[e.VehicleFlyTransform=357]="VehicleFlyTransform"}(V||(V={}));var P=V;const f=[{id:0,name:"Benjamin"},{id:1,name:"Daniel"},{id:2,name:"Joshua"},{id:3,name:"Noah"},{id:4,name:"Andrew"},{id:5,name:"Juan"},{id:6,name:"Alex"},{id:7,name:"Isaac"},{id:8,name:"Evan"},{id:9,name:"Ethan"},{id:10,name:"Vincent"},{id:11,name:"Angel"},{id:12,name:"Diego"},{id:13,name:"Adrian"},{id:14,name:"Gabriel"},{id:15,name:"Michael"},{id:16,name:"Santiago"},{id:17,name:"Kevin"},{id:18,name:"Louis"},{id:19,name:"Samuel"},{id:20,name:"Anthony"},{id:42,name:"Claude"},{id:43,name:"Niko"},{id:44,name:"John"}],L=[{id:21,name:"Hannah"},{id:22,name:"Audrey"},{id:23,name:"Jasmine"},{id:24,name:"Giselle"},{id:25,name:"Amelia"},{id:26,name:"Isabella"},{id:27,name:"Zoe"},{id:28,name:"Ava"},{id:29,name:"Camila"},{id:30,name:"Violet"},{id:31,name:"Sophia"},{id:32,name:"Evelyn"},{id:33,name:"Nicole"},{id:34,name:"Ashley"},{id:35,name:"Grace"},{id:36,name:"Brianna"},{id:37,name:"Natalie"},{id:38,name:"Olivia"},{id:39,name:"Elizabeth"},{id:40,name:"Charlotte"},{id:41,name:"Emma"},{id:45,name:"Misty"}];function g(e,t,n,o,i){SetPedHeadBlendData(e,L[t].id,f[n].id,0,L[t].id,f[n].id,0,o,i,0,!1)}function A(e){SetPedDefaultComponentVariation(e),SetPedComponentVariation(e,2,4,3,0),SetPedComponentVariation(e,6,1,1,0)}function D(e,t,n,o,i){N_0xf55e4046f6f831dc(e,t),N_0xe111a7c0d200cbc5(e,n),SetCamDofFnumberOfLens(e,o),SetCamDofMaxNearInFocusDistanceBlendLevel(e,i)}const F=.225;function k(e,t,n,o=!1,i=!1){return o?"~HUD_COLOUR_GREYDARK~"+t:n===e?i?`~s~~HUD_COLOUR_BLACK~← ${t} ~s~~HUD_COLOUR_BLACK~→`:"~HUD_COLOUR_BLACK~"+t:t}const M=[240,240,240,255],w=[0,0,0,180];function O(e,t,n,o=!1,i=!1){return o?"~HUD_COLOUR_GREYDARK~"+t:n===e?i?`~s~~HUD_COLOUR_BLACK~← ${t} ~s~~HUD_COLOUR_BLACK~→`:"~HUD_COLOUR_BLACK~"+t:t}const T=[240,240,240,255],v=[0,0,0,180];function U(e,t,n,o=!1,i=!1){return o?"~HUD_COLOUR_GREYDARK~"+t:n===e?i?`~s~~HUD_COLOUR_BLACK~← ${t} ~s~~HUD_COLOUR_BLACK~→`:"~HUD_COLOUR_BLACK~"+t:t}const _=[240,240,240,255],b=[0,0,0,180],H=[0,20,35,180];var x=async function(e,t,n,o,i,d,p,V){const W=a(()=>{if(IsControlJustPressed(0,P.FrontendAccept)){if(1===V)return l(W),void async function(e,t,n,o,i,r,c){const d=PlayerPedId();let p=0;const y=a(()=>{const a=L[n],D=f[o];if(s(C(F,96/1080,"Character Creator"),u(S(F,38/1080,0,0,0,255),m(F,38/1080,"~HUD_COLOUR_HB_BLUE~HERITAGE",0,.325)),u(h(F,228/1080,"pause_menu_pages_char_mom_dad","mumdadbg"),(e,t)=>h(.11875,228/1080,"char_creator_portraits",o>20?"special_male_"+(o-21):"male_"+o)(e+.043,t),(e,t)=>h(.11875,228/1080,"char_creator_portraits",n>20?"special_female_"+(n-21):"female_"+n)(e-.043,t)),u(S(F,38/1080,...0===p?M:w),m(F,38/1080,k(p,IsGameUsingMetricMeasurementSystem()?"Mum":"Mom",0),0,.325),m(F,38/1080,k(p,a.name,0,!1,!0),0,.325,R.Right)),u(S(F,38/1080,...1===p?M:w),m(F,38/1080,k(p,"Dad",1),0,.325),m(F,38/1080,k(p,D.name,1,!1,!0),0,.325,R.Right)),u(S(F,38/1080,...2===p?M:w),m(F,38/1080,k(p,"Resemblance",2),0,.325),m(F,38/1080,k(p,Math.round(100*i)+"%",2,!1,!0),0,.325,R.Right)),u(S(F,38/1080,...3===p?M:w),m(F,38/1080,k(p,"Skin Tone",3),0,.325),m(F,38/1080,k(p,Math.round(100*r)+"%",3,!1,!0),0,.325,R.Right)))(.128125,46/1080),IsControlJustPressed(0,P.FrontendCancel))l(y),x(t,e,n,o,i,r,c,1),SetCamActiveWithInterp(t,V,800,3,8),TaskPlayAnim(d,A,"loop",1,-1,-1,513,1,!1,!1,!1);else if(IsControlJustPressed(0,P.FrontendUp))-1==--p&&(p=3);else if(IsControlJustPressed(0,P.FrontendDown))4==++p&&(p=0);else if(IsControlJustPressed(0,P.FrontendLeft))switch(p){case 0:-1==--n&&(n=L.length-1),g(d,n,o,i,r);break;case 1:-1==--o&&(o=f.length-1),g(d,n,o,i,r);break;case 2:i>0&&g(d,n,o,i-=.01,r);break;case 3:r>0&&g(d,n,o,i,r-=.01)}else if(IsControlJustPressed(0,P.FrontendRight))switch(p){case 0:++n===L.length&&(n=0),g(d,n,o,i,r);break;case 1:++o===f.length&&(o=0),g(d,n,o,i,r);break;case 2:i<1&&g(d,n,o,i+=.01,r);break;case 3:r<1&&g(d,n,o,i,r+=.01)}}),V=CreateCamWithParams("DEFAULT_SCRIPTED_CAMERA",402.75,-998,-98.375,-5,0,0,36.97171,!1,0);D(V,1.5,3.5,.5,1),ShakeCam(V,"HAND_SHAKE",.1),SetCamActiveWithInterp(V,t,800,3,8);const A=`mp_character_creation@customise@${e?"":"fe"}male_a`;TaskPlayAnim(d,A,"face",1,-1,-1,513,1,!1,!1,!1)}(t,e,n,o,i,d,p);if(2===V)return l(W),void async function(e,t,n,o,i,r,c){const h=PlayerPedId(),d=CreateCamWithParams("DEFAULT_SCRIPTED_CAMERA",402.75,-998,-98.375,-5,0,0,36.97171,!1,0),p=`mp_character_creation@customise@${e?"":"fe"}male_a`;let V=0,f=0,L=8;const g=a(()=>{const a=[u(S(.225,38/1080,...0===V?T:v),m(.225,38/1080,O(V,"Brow",0),0,.325),m(.225,38/1080,O(V,"Custom",0,!1,!0),0,.325,R.Right)),u(S(.225,38/1080,...1===V?T:v),m(.225,38/1080,O(V,"Eyes",1),0,.325),m(.225,38/1080,O(V,"Custom",1,!1,!0),0,.325,R.Right)),u(S(.225,38/1080,...2===V?T:v),m(.225,38/1080,O(V,"Nose",2),0,.325),m(.225,38/1080,O(V,"Custom",2,!1,!0),0,.325,R.Right)),u(S(.225,38/1080,...3===V?T:v),m(.225,38/1080,O(V,"Nose Profile",3),0,.325),m(.225,38/1080,O(V,"Custom",3,!1,!0),0,.325,R.Right)),u(S(.225,38/1080,...4===V?T:v),m(.225,38/1080,O(V,"Nose Tip",4),0,.325),m(.225,38/1080,O(V,"Custom",4,!1,!0),0,.325,R.Right)),u(S(.225,38/1080,...5===V?T:v),m(.225,38/1080,O(V,"Cheekbones",5),0,.325),m(.225,38/1080,O(V,"Custom",5,!1,!0),0,.325,R.Right)),u(S(.225,38/1080,...6===V?T:v),m(.225,38/1080,O(V,"Cheeks",6),0,.325),m(.225,38/1080,O(V,"Custom",6,!1,!0),0,.325,R.Right)),u(S(.225,38/1080,...7===V?T:v),m(.225,38/1080,O(V,"Lips",7),0,.325),m(.225,38/1080,O(V,"Custom",7,!1,!0),0,.325,R.Right)),u(S(.225,38/1080,...8===V?T:v),m(.225,38/1080,O(V,"Jaw",8),0,.325),m(.225,38/1080,O(V,"Custom",8,!1,!0),0,.325,R.Right)),u(S(.225,38/1080,...9===V?T:v),m(.225,38/1080,O(V,"Chin Profile",9),0,.325),m(.225,38/1080,O(V,"Custom",9,!1,!0),0,.325,R.Right)),u(S(.225,38/1080,...10===V?T:v),m(.225,38/1080,O(V,"Chin Shape",10),0,.325),m(.225,38/1080,O(V,"Custom",10,!1,!0),0,.325,R.Right))].slice(f,L);s(C(.225,96/1080,"Character Creator"),u(S(.225,38/1080,0,0,0,255),m(.225,38/1080,"~HUD_COLOUR_HB_BLUE~FEATURES",0,.325),m(.225,38/1080,`~HUD_COLOUR_HB_BLUE~${V+1}/11`,0,.325,R.Right)),...a,y(2/1080),u(S(.225,38/1080,...v),(e,t)=>m(.225,38/1080,"↑",0,.325,R.Center)(e,t-.0035),(e,t)=>m(.225,38/1080,"↓",0,.325,R.Center)(e,t+.0035)-.0035),y(2/1080),S(.225,3/1080,0,0,0,255),u(S(.225,38/1080,...v),m(.225,38/1080,"NOT WORKING YET!!!!",0,.325)))(.128125,46/1080),IsControlJustPressed(0,P.FrontendCancel)?(l(g),x(t,e,n,o,i,r,c,2),SetCamActiveWithInterp(t,d,800,3,8),TaskPlayAnim(h,p,"loop",1,-1,-1,513,1,!1,!1,!1)):IsControlJustPressed(0,P.FrontendUp)?-1==--V?(V=10,f=3,L=11):V===f-1&&(L--,f--):IsControlJustPressed(0,P.FrontendDown)&&(11==++V?(V=0,f=0,L=8):V===L&&(L++,f++))});D(d,1.5,3.5,.5,1),ShakeCam(d,"HAND_SHAKE",.1),SetCamActiveWithInterp(d,t,800,3,8),TaskPlayAnim(h,p,"face",1,-1,-1,513,1,!1,!1,!1)}(t,e,n,o,i,d,p)}else IsControlJustPressed(0,P.FrontendUp)?-1==--V&&(V=5):IsControlJustPressed(0,P.FrontendDown)?6==++V&&(V=0):0===V&&(IsControlJustPressed(0,P.FrontendLeft)||IsControlJustPressed(0,P.FrontendRight))&&(t=!t,async function(){const e=PlayerId();await r(()=>-1!=GetPlayerPed(e)&&!!NetworkIsPlayerActive(e));let a=GetPlayerPed(e);const l=GetHashKey(`mp_${t?"m":"f"}_freemode_01`);RequestModel(l);const h=`mp_character_creation@customise@${t?"":"fe"}male_a`;RequestAnimDict(h),await r(()=>!!HasAnimDictLoaded(h)&&!!HasModelLoaded(l)),await c(333),SetPlayerModel(e,l),a=GetPlayerPed(e),TaskPlayAnim(a,h,"loop",1e4,-8,-1,513,1,!1,!1,!1),AttachEntityToEntity(p,a,GetPedBoneIndex(a,28422),0,0,0,0,0,0,!1,!1,!1,!1,2,!0),A(a),g(a,n,o,i,d),SetModelAsNoLongerNeeded(l)}());s(C(.225,96/1080,"Character Creator"),u(S(.225,38/1080,0,0,0,255),m(.225,38/1080,"~HUD_COLOUR_HB_BLUE~NEW CHARACTER",0,.325)),u(S(.225,38/1080,...0===V?_:b),m(.225,38/1080,U(V,"Sex",0),0,.325),m(.225,38/1080,U(V,t?"Male":"Female",0,!1,!0),0,.325,R.Right)),u(S(.225,38/1080,...1===V?_:b),m(.225,38/1080,U(V,"Heritage",1),0,.325)),u(S(.225,38/1080,...2===V?_:b),m(.225,38/1080,U(V,"Features",2),0,.325)),u(S(.225,38/1080,...3===V?_:b),m(.225,38/1080,U(V,"Appearance",3,!0),0,.325)),u(S(.225,38/1080,...4===V?_:b),m(.225,38/1080,U(V,"Apparel",4,!0),0,.325)),u(S(.225,38/1080,...5===V?_:H),m(.225,38/1080,U(V,"Save & Continue",5,!0),0,.325)),y(2/1080),S(.225,3/1080,0,0,0,255),u(S(.225,38/1080,...b),m(.225,38/1080,["Select the gender of your Character.","Select to choose your parents.","Select to alter your facial Features.","Select to change your Appearance.","Select to change your Apparel.","Ready to start playing GTA Online?"][V],0,.325)))(.128125,46/1080)})};function W(e,t){const n=e;SetPlayerControl(n,!t,0);const o=GetPlayerPed(n);t?(IsEntityVisible(o)&&SetEntityVisible(o,!1,!1),SetEntityCollision(o,!1,!1),FreezeEntityPosition(o,!0),SetPlayerInvincible(n,!0),IsPedFatallyInjured(o)||ClearPedTasksImmediately(o)):(IsEntityVisible(o)||SetEntityVisible(o,!0,!1),IsPedInAnyVehicle(o,!1)||SetEntityCollision(o,!0,!1),FreezeEntityPosition(o,!1),SetPlayerInvincible(n,!1))}a(HideHudAndRadarThisFrame),async function(e,t,n,o,i){const l=!GetIsLoadingScreenActive();DoScreenFadeOut(0),ShutdownLoadingScreen();const h=PlayerId();await r(()=>-1!=GetPlayerPed(h)&&!!NetworkIsPlayerActive(h));let d=GetPlayerPed(h);SetEntityVisible(d,!1,!1),SetPlayerVisibleLocally(h,!1),FreezeEntityPosition(d,!0);const p=GetHashKey(`mp_${e?"m":"f"}_freemode_01`);RequestModel(p);const s=RequestScaleformMovie("mugshot_board_01");let u=`mp_character_creation@customise@${e?"":"fe"}male_a`;RequestAnimDict(u),await r(()=>!!HasScaleformMovieLoaded(s)&&!!HasAnimDictLoaded(u)&&!!HasModelLoaded(p)),await c(l?100:1e3),W(h,!0),SetPlayerModel(h,p),d=GetPlayerPed(h),SetModelAsNoLongerNeeded(p);const S=404.81,y=-997.76,R=-98.859;RequestCollisionAtCoord(S,y,R),SetEntityCoordsNoOffset(d,S,y,R,!0,!0,!0),SetEntityVisible(d,!0,!1),FreezeEntityPosition(d,!1),A(d),g(d,t,n,o,i);const m=GetHashKey("prop_police_id_board"),C=GetHashKey("prop_police_id_text");RequestStreamedTextureDict("pause_menu_pages_char_mom_dad",!0),RequestStreamedTextureDict("char_creator_portraits",!0),await r(()=>!!(HasCollisionLoadedAroundEntity(d)&&HasModelLoaded(m)&&HasModelLoaded(C)&&HasStreamedTextureDictLoaded("pause_menu_pages_char_mom_dad")&&HasStreamedTextureDictLoaded("char_creator_portraits"))),W(h,!1);const[V,P,f]=GetEntityCoords(d,!1),L=CreateObject(m,V,P,f,!1,!0,!1),F=CreateObject(C,V,P,f,!1,!0,!1);AttachEntityToEntity(F,L,4103,0,0,0,0,0,0,!1,!1,!1,!1,2,!0),AttachEntityToEntity(L,d,GetPedBoneIndex(d,28422),0,0,0,0,0,0,!1,!1,!1,!1,2,!0),SetModelAsNoLongerNeeded(m),SetModelAsNoLongerNeeded(C),await c(l?100:4500),IsScreenFadedOut()&&(await r(()=>!IsScreenFadedOut()),DoScreenFadeIn(l?0:2e3));const k=function(e,t){let n=0;return IsNamedRendertargetRegistered(e)||RegisterNamedRendertarget(e,!1),IsNamedRendertargetLinked(t)||LinkNamedRendertarget(t),IsNamedRendertargetRegistered(e)&&(n=GetNamedRendertargetRenderId(e)),n}("ID_Text",C);a(()=>k&&function(e,t,n,o,i,a,l){BeginScaleformMovieMethod(t,"SET_BOARD"),PushScaleformMovieMethodParameterString(n),PushScaleformMovieMethodParameterString(i),PushScaleformMovieMethodParameterString(a),PushScaleformMovieMethodParameterString(o),PushScaleformMovieFunctionParameterInt(0),PushScaleformMovieFunctionParameterInt(l),PushScaleformMovieFunctionParameterInt(0),EndScaleformMovieMethod(),SetTextRenderId(e),SetUiLayer(4),SetScriptGfxDrawBehindPausemenu(!0),DrawScaleformMovie(t,.405,.37,.81,.74,255,255,255,255,0),SetScriptGfxDrawBehindPausemenu(!1),SetTextRenderId(GetDefaultScriptRendertargetRenderId())}(k,s,"Your Name","TRANSFERRED","0000532131","LOS SANTOS POLICE DEPT",1));const[M,w]=OpenSequenceTask(0);TaskPlayAnimAdvanced(0,u,"intro",S,y,R,0,0,-40,8,-8,l?1:-1,4608,l?1:0,2,0),TaskPlayAnim(0,u,"loop",8,-8,-1,513,1,!1,!1,!1),CloseSequenceTask(w),ClearPedTasks(d),ClearPedTasksImmediately(d),TaskPerformSequence(d,w),ClearSequenceTask(w),await c(l?50:250);const[O,T]=function(){const e=CreateCamWithParams("DEFAULT_SCRIPTED_CAMERA",402.75,-1005,-98.6,0,0,0,36.97171,!1,0);SetCamActive(e,!0),RenderScriptCams(!0,!1,0,!1,!1);const t=CreateCamWithParams("DEFAULT_SCRIPTED_CAMERA",402.75,-1000.6,-98.6,-5,0,0,36.97171,!1,0);return ShakeCam(t,"HAND_SHAKE",.1),D(t,3.5,.33,.5,1),[e,t]}();for(SetCamActiveWithInterp(T,O,l?100:4400,8,8);1!==GetSequenceProgress(d);)await c(250);await x(T,e,t,n,o,i,L,0)}(!0,19,12,.5,.5)}]);