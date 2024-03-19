"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidIcon = exports.iconsObject = exports.iconsArray = void 0;
var Accessibility_1 = __importDefault(require("./_icons/Accessibility"));
var AccessibilityProfile_1 = __importDefault(require("./_icons/AccessibilityProfile"));
var AccessibleBathroom_1 = __importDefault(require("./_icons/AccessibleBathroom"));
var AccessibleElevator_1 = __importDefault(require("./_icons/AccessibleElevator"));
var AccessibleEquipment_1 = __importDefault(require("./_icons/AccessibleEquipment"));
var AccessiblePaths_1 = __importDefault(require("./_icons/AccessiblePaths"));
var AccessibleTransportation_1 = __importDefault(require("./_icons/AccessibleTransportation"));
var Accommodation_1 = __importDefault(require("./_icons/Accommodation"));
var Activities_1 = __importDefault(require("./_icons/Activities"));
var Activity_1 = __importDefault(require("./_icons/Activity"));
var AdaptiveEquipment_1 = __importDefault(require("./_icons/AdaptiveEquipment"));
var Add_1 = __importDefault(require("./_icons/Add"));
var Adrenaline_1 = __importDefault(require("./_icons/Adrenaline"));
var AirConditioner_1 = __importDefault(require("./_icons/AirConditioner"));
var AirportShuttle_1 = __importDefault(require("./_icons/AirportShuttle"));
var AlcoholicBeverages_1 = __importDefault(require("./_icons/AlcoholicBeverages"));
var Altitude_1 = __importDefault(require("./_icons/Altitude"));
var ArrowBack_1 = __importDefault(require("./_icons/ArrowBack"));
var ArrowDown_1 = __importDefault(require("./_icons/ArrowDown"));
var ArrowForward_1 = __importDefault(require("./_icons/ArrowForward"));
var ArrowUp_1 = __importDefault(require("./_icons/ArrowUp"));
var Art_1 = __importDefault(require("./_icons/Art"));
var Assistance_1 = __importDefault(require("./_icons/Assistance"));
var Atm_1 = __importDefault(require("./_icons/Atm"));
var Attachment_1 = __importDefault(require("./_icons/Attachment"));
var Audioguides_1 = __importDefault(require("./_icons/Audioguides"));
var Auditorium_1 = __importDefault(require("./_icons/Auditorium"));
var AuditoryGuidance_1 = __importDefault(require("./_icons/AuditoryGuidance"));
var Baby_1 = __importDefault(require("./_icons/Baby"));
var Backpack_1 = __importDefault(require("./_icons/Backpack"));
var Backpacker_1 = __importDefault(require("./_icons/Backpacker"));
var Bagagge_1 = __importDefault(require("./_icons/Bagagge"));
var Baggage_1 = __importDefault(require("./_icons/Baggage"));
var Balcony_1 = __importDefault(require("./_icons/Balcony"));
var Bar_1 = __importDefault(require("./_icons/Bar"));
var Barbecue_1 = __importDefault(require("./_icons/Barbecue"));
var Bathroom_1 = __importDefault(require("./_icons/Bathroom"));
var BathroomAccessInterior_1 = __importDefault(require("./_icons/BathroomAccessInterior"));
var BathroomInterior_1 = __importDefault(require("./_icons/BathroomInterior"));
var BathroomSink_1 = __importDefault(require("./_icons/BathroomSink"));
var BeachAccess_1 = __importDefault(require("./_icons/BeachAccess"));
var Beachfront_1 = __importDefault(require("./_icons/Beachfront"));
var Bed_1 = __importDefault(require("./_icons/Bed"));
var BedBreakfast_1 = __importDefault(require("./_icons/BedBreakfast"));
var BedHoist_1 = __importDefault(require("./_icons/BedHoist"));
var BedroomAccess_1 = __importDefault(require("./_icons/BedroomAccess"));
var BedroomInterior_1 = __importDefault(require("./_icons/BedroomInterior"));
var BeerBar_1 = __importDefault(require("./_icons/BeerBar"));
var Best_1 = __importDefault(require("./_icons/Best"));
var Bidet_1 = __importDefault(require("./_icons/Bidet"));
var Blind_1 = __importDefault(require("./_icons/Blind"));
var Boat_1 = __importDefault(require("./_icons/Boat"));
var Braille_1 = __importDefault(require("./_icons/Braille"));
var Breakfast_1 = __importDefault(require("./_icons/Breakfast"));
var BuildingColor_1 = __importDefault(require("./_icons/BuildingColor"));
var Buildingentrance_1 = __importDefault(require("./_icons/Buildingentrance"));
var Bus_1 = __importDefault(require("./_icons/Bus"));
var BusinessCenter_1 = __importDefault(require("./_icons/BusinessCenter"));
var CCheck_1 = __importDefault(require("./_icons/CCheck"));
var CCheckFilled_1 = __importDefault(require("./_icons/CCheckFilled"));
var CDelete_1 = __importDefault(require("./_icons/CDelete"));
var Cabin_1 = __importDefault(require("./_icons/Cabin"));
var Cafeteria_1 = __importDefault(require("./_icons/Cafeteria"));
var Calendar_1 = __importDefault(require("./_icons/Calendar"));
var Camera_1 = __importDefault(require("./_icons/Camera"));
var Car_1 = __importDefault(require("./_icons/Car"));
var Celebrate_1 = __importDefault(require("./_icons/Celebrate"));
var Chair_1 = __importDefault(require("./_icons/Chair"));
var Champagne_1 = __importDefault(require("./_icons/Champagne"));
var ChangingRoom_1 = __importDefault(require("./_icons/ChangingRoom"));
var Chat_1 = __importDefault(require("./_icons/Chat"));
var Check_1 = __importDefault(require("./_icons/Check"));
var Clock_1 = __importDefault(require("./_icons/Clock"));
var CloseButton_1 = __importDefault(require("./_icons/CloseButton"));
var CloseButtonFilled_1 = __importDefault(require("./_icons/CloseButtonFilled"));
var ClosedCaptions_1 = __importDefault(require("./_icons/ClosedCaptions"));
var Closet_1 = __importDefault(require("./_icons/Closet"));
var Clothes_1 = __importDefault(require("./_icons/Clothes"));
var CoffeeMaker_1 = __importDefault(require("./_icons/CoffeeMaker"));
var Cognitive_1 = __importDefault(require("./_icons/Cognitive"));
var Cold_1 = __importDefault(require("./_icons/Cold"));
var Comfortable_1 = __importDefault(require("./_icons/Comfortable"));
var ComfortableEnough_1 = __importDefault(require("./_icons/ComfortableEnough"));
var Comment_1 = __importDefault(require("./_icons/Comment"));
var CommonBathroom_1 = __importDefault(require("./_icons/CommonBathroom"));
var Companion_1 = __importDefault(require("./_icons/Companion"));
var Complete_1 = __importDefault(require("./_icons/Complete"));
var CompletelyFlat_1 = __importDefault(require("./_icons/CompletelyFlat"));
var Conference_1 = __importDefault(require("./_icons/Conference"));
var Confused_1 = __importDefault(require("./_icons/Confused"));
var ContrastMarking_1 = __importDefault(require("./_icons/ContrastMarking"));
var Copy_1 = __importDefault(require("./_icons/Copy"));
var Countries_1 = __importDefault(require("./_icons/Countries"));
var Coupon_1 = __importDefault(require("./_icons/Coupon"));
var CreditCard_1 = __importDefault(require("./_icons/CreditCard"));
var Crib_1 = __importDefault(require("./_icons/Crib"));
var Crowded_1 = __importDefault(require("./_icons/Crowded"));
var Cruise_1 = __importDefault(require("./_icons/Cruise"));
var Crutches_1 = __importDefault(require("./_icons/Crutches"));
var CulturalPlace_1 = __importDefault(require("./_icons/CulturalPlace"));
var Culture_1 = __importDefault(require("./_icons/Culture"));
var CurrencyExchange_1 = __importDefault(require("./_icons/CurrencyExchange"));
var CustomerSupport_1 = __importDefault(require("./_icons/CustomerSupport"));
var Daycare_1 = __importDefault(require("./_icons/Daycare"));
var Deaf_1 = __importDefault(require("./_icons/Deaf"));
var Delete_1 = __importDefault(require("./_icons/Delete"));
var DeleteSolid_1 = __importDefault(require("./_icons/DeleteSolid"));
var Destinations_1 = __importDefault(require("./_icons/Destinations"));
var Dice_1 = __importDefault(require("./_icons/Dice"));
var Dinner_1 = __importDefault(require("./_icons/Dinner"));
var Document_1 = __importDefault(require("./_icons/Document"));
var Documentation_1 = __importDefault(require("./_icons/Documentation"));
var Done_1 = __importDefault(require("./_icons/Done"));
var DoorHandle_1 = __importDefault(require("./_icons/DoorHandle"));
var DoubleVideo_1 = __importDefault(require("./_icons/DoubleVideo"));
var Download_1 = __importDefault(require("./_icons/Download"));
var DryCleaning_1 = __importDefault(require("./_icons/DryCleaning"));
var Duplicate_1 = __importDefault(require("./_icons/Duplicate"));
var Edit_1 = __importDefault(require("./_icons/Edit"));
var Education_1 = __importDefault(require("./_icons/Education"));
var ElectricDeviceWheelchair_1 = __importDefault(require("./_icons/ElectricDeviceWheelchair"));
var Electricity_1 = __importDefault(require("./_icons/Electricity"));
var Elevator_1 = __importDefault(require("./_icons/Elevator"));
var Email_1 = __importDefault(require("./_icons/Email"));
var Entertainment_1 = __importDefault(require("./_icons/Entertainment"));
var Entrance_1 = __importDefault(require("./_icons/Entrance"));
var Equipment_1 = __importDefault(require("./_icons/Equipment"));
var EventRoom_1 = __importDefault(require("./_icons/EventRoom"));
var Exhibition_1 = __importDefault(require("./_icons/Exhibition"));
var ExtraFirmMattress_1 = __importDefault(require("./_icons/ExtraFirmMattress"));
var ExtraSoftMattress_1 = __importDefault(require("./_icons/ExtraSoftMattress"));
var Facebook_1 = __importDefault(require("./_icons/Facebook"));
var FacebookNeutral_1 = __importDefault(require("./_icons/FacebookNeutral"));
var Filter_1 = __importDefault(require("./_icons/Filter"));
var FitnessCenter_1 = __importDefault(require("./_icons/FitnessCenter"));
var FiveHours_1 = __importDefault(require("./_icons/FiveHours"));
var FoldablePowerWheelchair_1 = __importDefault(require("./_icons/FoldablePowerWheelchair"));
var FoodService_1 = __importDefault(require("./_icons/FoodService"));
var Forgetful_1 = __importDefault(require("./_icons/Forgetful"));
var Friendly_1 = __importDefault(require("./_icons/Friendly"));
var Garden_1 = __importDefault(require("./_icons/Garden"));
var GeneralAttribute_1 = __importDefault(require("./_icons/GeneralAttribute"));
var GentleSlope_1 = __importDefault(require("./_icons/GentleSlope"));
var Google_1 = __importDefault(require("./_icons/Google"));
var GoogleNeutral_1 = __importDefault(require("./_icons/GoogleNeutral"));
var Gratuities_1 = __importDefault(require("./_icons/Gratuities"));
var GroundTransportation_1 = __importDefault(require("./_icons/GroundTransportation"));
var Guides_1 = __importDefault(require("./_icons/Guides"));
var Gym_1 = __importDefault(require("./_icons/Gym"));
var HairDryer_1 = __importDefault(require("./_icons/HairDryer"));
var HandShakeColor_1 = __importDefault(require("./_icons/HandShakeColor"));
var Happy_1 = __importDefault(require("./_icons/Happy"));
var Health_1 = __importDefault(require("./_icons/Health"));
var HearingAid_1 = __importDefault(require("./_icons/HearingAid"));
var HearingLoop_1 = __importDefault(require("./_icons/HearingLoop"));
var Heartbeat_1 = __importDefault(require("./_icons/Heartbeat"));
var HeatedPool_1 = __importDefault(require("./_icons/HeatedPool"));
var Heater_1 = __importDefault(require("./_icons/Heater"));
var HeavyPowerWheelchair_1 = __importDefault(require("./_icons/HeavyPowerWheelchair"));
var Heights_1 = __importDefault(require("./_icons/Heights"));
var Helmet_1 = __importDefault(require("./_icons/Helmet"));
var Help_1 = __importDefault(require("./_icons/Help"));
var HelpFilled_1 = __importDefault(require("./_icons/HelpFilled"));
var Hide_1 = __importDefault(require("./_icons/Hide"));
var HighBathtub_1 = __importDefault(require("./_icons/HighBathtub"));
var Home_1 = __importDefault(require("./_icons/Home"));
var Hot_1 = __importDefault(require("./_icons/Hot"));
var Hotel_1 = __importDefault(require("./_icons/Hotel"));
var Housekeeping_1 = __importDefault(require("./_icons/Housekeeping"));
var Humidity_1 = __importDefault(require("./_icons/Humidity"));
var Id_1 = __importDefault(require("./_icons/Id"));
var ImportantInfo_1 = __importDefault(require("./_icons/ImportantInfo"));
var InProgress_1 = __importDefault(require("./_icons/InProgress"));
var Instagram_1 = __importDefault(require("./_icons/Instagram"));
var InstagramNeutral_1 = __importDefault(require("./_icons/InstagramNeutral"));
var Instructor_1 = __importDefault(require("./_icons/Instructor"));
var Insurance_1 = __importDefault(require("./_icons/Insurance"));
var Interior_1 = __importDefault(require("./_icons/Interior"));
var Invite_1 = __importDefault(require("./_icons/Invite"));
var Iron_1 = __importDefault(require("./_icons/Iron"));
var Jacuzzi_1 = __importDefault(require("./_icons/Jacuzzi"));
var JeepCar_1 = __importDefault(require("./_icons/JeepCar"));
var Key_1 = __importDefault(require("./_icons/Key"));
var Keys_1 = __importDefault(require("./_icons/Keys"));
var KingBed_1 = __importDefault(require("./_icons/KingBed"));
var LakeSea_1 = __importDefault(require("./_icons/LakeSea"));
var LandActivity_1 = __importDefault(require("./_icons/LandActivity"));
var Language_1 = __importDefault(require("./_icons/Language"));
var Language02_1 = __importDefault(require("./_icons/Language02"));
var LanguageMessage_1 = __importDefault(require("./_icons/LanguageMessage"));
var LargePrint_1 = __importDefault(require("./_icons/LargePrint"));
var Laundry_1 = __importDefault(require("./_icons/Laundry"));
var Level_1 = __importDefault(require("./_icons/Level"));
var LeverHandle_1 = __importDefault(require("./_icons/LeverHandle"));
var Lifevest_1 = __importDefault(require("./_icons/Lifevest"));
var LinkArrow_1 = __importDefault(require("./_icons/LinkArrow"));
var Linkedin_1 = __importDefault(require("./_icons/Linkedin"));
var LinkedinNeutral_1 = __importDefault(require("./_icons/LinkedinNeutral"));
var Lobby_1 = __importDefault(require("./_icons/Lobby"));
var Location_1 = __importDefault(require("./_icons/Location"));
var LocationBlack_1 = __importDefault(require("./_icons/LocationBlack"));
var Lock_1 = __importDefault(require("./_icons/Lock"));
var LogOut_1 = __importDefault(require("./_icons/LogOut"));
var LowerBathtub_1 = __importDefault(require("./_icons/LowerBathtub"));
var LowerSteps_1 = __importDefault(require("./_icons/LowerSteps"));
var Lunch_1 = __importDefault(require("./_icons/Lunch"));
var MeasuringTape_1 = __importDefault(require("./_icons/MeasuringTape"));
var MeetingPoint_1 = __importDefault(require("./_icons/MeetingPoint"));
var MeetingRoom_1 = __importDefault(require("./_icons/MeetingRoom"));
var Menu_1 = __importDefault(require("./_icons/Menu"));
var MessengerNeutral_1 = __importDefault(require("./_icons/MessengerNeutral"));
var MiniFridge_1 = __importDefault(require("./_icons/MiniFridge"));
var Minus_1 = __importDefault(require("./_icons/Minus"));
var Mirror_1 = __importDefault(require("./_icons/Mirror"));
var Missing_1 = __importDefault(require("./_icons/Missing"));
var MissingAlt_1 = __importDefault(require("./_icons/MissingAlt"));
var MobilePhone_1 = __importDefault(require("./_icons/MobilePhone"));
var MobilePhoneV2_1 = __importDefault(require("./_icons/MobilePhoneV2"));
var Money_1 = __importDefault(require("./_icons/Money"));
var MoneyMoney_1 = __importDefault(require("./_icons/MoneyMoney"));
var MoodSwings_1 = __importDefault(require("./_icons/MoodSwings"));
var More_1 = __importDefault(require("./_icons/More"));
var Motel_1 = __importDefault(require("./_icons/Motel"));
var Mountain_1 = __importDefault(require("./_icons/Mountain"));
var MultiDayTrip_1 = __importDefault(require("./_icons/MultiDayTrip"));
var MultiDayTrips_1 = __importDefault(require("./_icons/MultiDayTrips"));
var NarrowShower_1 = __importDefault(require("./_icons/NarrowShower"));
var News_1 = __importDefault(require("./_icons/News"));
var Next_1 = __importDefault(require("./_icons/Next"));
var No_1 = __importDefault(require("./_icons/No"));
var NoFees_1 = __importDefault(require("./_icons/NoFees"));
var NoPhone_1 = __importDefault(require("./_icons/NoPhone"));
var Noise_1 = __importDefault(require("./_icons/Noise"));
var NotComfortable_1 = __importDefault(require("./_icons/NotComfortable"));
var Notification_1 = __importDefault(require("./_icons/Notification"));
var NotificationActive_1 = __importDefault(require("./_icons/NotificationActive"));
var Nurse_1 = __importDefault(require("./_icons/Nurse"));
var Nutrition_1 = __importDefault(require("./_icons/Nutrition"));
var OnSale_1 = __importDefault(require("./_icons/OnSale"));
var OneHour_1 = __importDefault(require("./_icons/OneHour"));
var OneStep_1 = __importDefault(require("./_icons/OneStep"));
var OpenTour_1 = __importDefault(require("./_icons/OpenTour"));
var Other_1 = __importDefault(require("./_icons/Other"));
var Outdoor_1 = __importDefault(require("./_icons/Outdoor"));
var OutdoorAmenities_1 = __importDefault(require("./_icons/OutdoorAmenities"));
var OutdoorSpace_1 = __importDefault(require("./_icons/OutdoorSpace"));
var Oven_1 = __importDefault(require("./_icons/Oven"));
var Oxigen_1 = __importDefault(require("./_icons/Oxigen"));
var Park_1 = __importDefault(require("./_icons/Park"));
var Parking_1 = __importDefault(require("./_icons/Parking"));
var Partners_1 = __importDefault(require("./_icons/Partners"));
var Pending_1 = __importDefault(require("./_icons/Pending"));
var Person_1 = __importDefault(require("./_icons/Person"));
var PetFriendly_1 = __importDefault(require("./_icons/PetFriendly"));
var Phone_1 = __importDefault(require("./_icons/Phone"));
var PhysicalSpace_1 = __importDefault(require("./_icons/PhysicalSpace"));
var PicnicTable_1 = __importDefault(require("./_icons/PicnicTable"));
var Pinterest_1 = __importDefault(require("./_icons/Pinterest"));
var PinterestNeutral_1 = __importDefault(require("./_icons/PinterestNeutral"));
var Places_1 = __importDefault(require("./_icons/Places"));
var PlacesToStay_1 = __importDefault(require("./_icons/PlacesToStay"));
var Plane_1 = __importDefault(require("./_icons/Plane"));
var Playground_1 = __importDefault(require("./_icons/Playground"));
var Plus_1 = __importDefault(require("./_icons/Plus"));
var PlusBig_1 = __importDefault(require("./_icons/PlusBig"));
var PregnantWoman_1 = __importDefault(require("./_icons/PregnantWoman"));
var Previous_1 = __importDefault(require("./_icons/Previous"));
var PrivateTour_1 = __importDefault(require("./_icons/PrivateTour"));
var Profile_1 = __importDefault(require("./_icons/Profile"));
var ProfileOutline_1 = __importDefault(require("./_icons/ProfileOutline"));
var QueenBed_1 = __importDefault(require("./_icons/QueenBed"));
var Reception_1 = __importDefault(require("./_icons/Reception"));
var Resort_1 = __importDefault(require("./_icons/Resort"));
var Restaurant_1 = __importDefault(require("./_icons/Restaurant"));
var Restrictions_1 = __importDefault(require("./_icons/Restrictions"));
var RollInShower_1 = __importDefault(require("./_icons/RollInShower"));
var RoomAccess_1 = __importDefault(require("./_icons/RoomAccess"));
var RoomEntrance_1 = __importDefault(require("./_icons/RoomEntrance"));
var RoomIllustration_1 = __importDefault(require("./_icons/RoomIllustration"));
var RoomService_1 = __importDefault(require("./_icons/RoomService"));
var Safe_1 = __importDefault(require("./_icons/Safe"));
var SafetyEquipment_1 = __importDefault(require("./_icons/SafetyEquipment"));
var Sauna_1 = __importDefault(require("./_icons/Sauna"));
var Save_1 = __importDefault(require("./_icons/Save"));
var Scooter_1 = __importDefault(require("./_icons/Scooter"));
var Search_1 = __importDefault(require("./_icons/Search"));
var Security_1 = __importDefault(require("./_icons/Security"));
var SedanCar_1 = __importDefault(require("./_icons/SedanCar"));
var Senior_1 = __importDefault(require("./_icons/Senior"));
var Sent_1 = __importDefault(require("./_icons/Sent"));
var ServiceDog_1 = __importDefault(require("./_icons/ServiceDog"));
var Settings_1 = __importDefault(require("./_icons/Settings"));
var SevenHours_1 = __importDefault(require("./_icons/SevenHours"));
var Share_1 = __importDefault(require("./_icons/Share"));
var ShareArrow_1 = __importDefault(require("./_icons/ShareArrow"));
var Shop_1 = __importDefault(require("./_icons/Shop"));
var Shopping_1 = __importDefault(require("./_icons/Shopping"));
var ShortDistances_1 = __importDefault(require("./_icons/ShortDistances"));
var Shower_1 = __importDefault(require("./_icons/Shower"));
var ShowerGrabBar_1 = __importDefault(require("./_icons/ShowerGrabBar"));
var ShowerLowStep_1 = __importDefault(require("./_icons/ShowerLowStep"));
var ShowerSeat_1 = __importDefault(require("./_icons/ShowerSeat"));
var ShowerWheelchair_1 = __importDefault(require("./_icons/ShowerWheelchair"));
var SignLanguage_1 = __importDefault(require("./_icons/SignLanguage"));
var Sink_1 = __importDefault(require("./_icons/Sink"));
var SinkTap_1 = __importDefault(require("./_icons/SinkTap"));
var SmallSpaces_1 = __importDefault(require("./_icons/SmallSpaces"));
var SmokeFree_1 = __importDefault(require("./_icons/SmokeFree"));
var SnackBar_1 = __importDefault(require("./_icons/SnackBar"));
var Snacks_1 = __importDefault(require("./_icons/Snacks"));
var Snapchat_1 = __importDefault(require("./_icons/Snapchat"));
var SnapchatNeutral_1 = __importDefault(require("./_icons/SnapchatNeutral"));
var SocialDistancing_1 = __importDefault(require("./_icons/SocialDistancing"));
var SoftDrink_1 = __importDefault(require("./_icons/SoftDrink"));
var Sort_1 = __importDefault(require("./_icons/Sort"));
var Spa_1 = __importDefault(require("./_icons/Spa"));
var StairHandrails_1 = __importDefault(require("./_icons/StairHandrails"));
var Stairs_1 = __importDefault(require("./_icons/Stairs"));
var StarEmpty_1 = __importDefault(require("./_icons/StarEmpty"));
var StarFull_1 = __importDefault(require("./_icons/StarFull"));
var StarHalf_1 = __importDefault(require("./_icons/StarHalf"));
var StepFree_1 = __importDefault(require("./_icons/StepFree"));
var StepOne_1 = __importDefault(require("./_icons/StepOne"));
var StepTwo_1 = __importDefault(require("./_icons/StepTwo"));
var Sun_1 = __importDefault(require("./_icons/Sun"));
var Suv_1 = __importDefault(require("./_icons/Suv"));
var SwimmingPool_1 = __importDefault(require("./_icons/SwimmingPool"));
var Switch_1 = __importDefault(require("./_icons/Switch"));
var TactilePaving_1 = __importDefault(require("./_icons/TactilePaving"));
var TactileReferences_1 = __importDefault(require("./_icons/TactileReferences"));
var Taxes_1 = __importDefault(require("./_icons/Taxes"));
var Tea_1 = __importDefault(require("./_icons/Tea"));
var TeaMakingFacilities_1 = __importDefault(require("./_icons/TeaMakingFacilities"));
var TeaRoom_1 = __importDefault(require("./_icons/TeaRoom"));
var TermsAndConditions_1 = __importDefault(require("./_icons/TermsAndConditions"));
var Terrace_1 = __importDefault(require("./_icons/Terrace"));
var ThingsToDo_1 = __importDefault(require("./_icons/ThingsToDo"));
var ThirtyMinutes_1 = __importDefault(require("./_icons/ThirtyMinutes"));
var ThreeHours_1 = __importDefault(require("./_icons/ThreeHours"));
var ThreeSteps_1 = __importDefault(require("./_icons/ThreeSteps"));
var Ticket_1 = __importDefault(require("./_icons/Ticket"));
var Tiktok_1 = __importDefault(require("./_icons/Tiktok"));
var TiktokNeutral_1 = __importDefault(require("./_icons/TiktokNeutral"));
var Toilet_1 = __importDefault(require("./_icons/Toilet"));
var ToiletGrabBar_1 = __importDefault(require("./_icons/ToiletGrabBar"));
var ToiletPaper_1 = __importDefault(require("./_icons/ToiletPaper"));
var TourGuide_1 = __importDefault(require("./_icons/TourGuide"));
var ToursActivities_1 = __importDefault(require("./_icons/ToursActivities"));
var Transport_1 = __importDefault(require("./_icons/Transport"));
var Transportation_1 = __importDefault(require("./_icons/Transportation"));
var TransportationColor_1 = __importDefault(require("./_icons/TransportationColor"));
var TravelTips_1 = __importDefault(require("./_icons/TravelTips"));
var Traveler_1 = __importDefault(require("./_icons/Traveler"));
var TurningRadius_1 = __importDefault(require("./_icons/TurningRadius"));
var Tv_1 = __importDefault(require("./_icons/Tv"));
var TwentyFourHour_1 = __importDefault(require("./_icons/TwentyFourHour"));
var TwinBed_1 = __importDefault(require("./_icons/TwinBed"));
var Twitter_1 = __importDefault(require("./_icons/Twitter"));
var TwitterNeutral_1 = __importDefault(require("./_icons/TwitterNeutral"));
var TwoAssistants_1 = __importDefault(require("./_icons/TwoAssistants"));
var TwoHours_1 = __importDefault(require("./_icons/TwoHours"));
var Upload_1 = __importDefault(require("./_icons/Upload"));
var ValetParking_1 = __importDefault(require("./_icons/ValetParking"));
var Van_1 = __importDefault(require("./_icons/Van"));
var VendingMachine_1 = __importDefault(require("./_icons/VendingMachine"));
var Verified_1 = __importDefault(require("./_icons/Verified"));
var VerySlope_1 = __importDefault(require("./_icons/VerySlope"));
var VideoCamera_1 = __importDefault(require("./_icons/VideoCamera"));
var View_1 = __importDefault(require("./_icons/View"));
var Vimeo_1 = __importDefault(require("./_icons/Vimeo"));
var VimeoNeutral_1 = __importDefault(require("./_icons/VimeoNeutral"));
var WTWIso_1 = __importDefault(require("./_icons/WTWIso"));
var WTWLogo_1 = __importDefault(require("./_icons/WTWLogo"));
var WTWLogoNew_1 = __importDefault(require("./_icons/WTWLogoNew"));
var WTWLogoNewWhite_1 = __importDefault(require("./_icons/WTWLogoNewWhite"));
var WTWLogoVertical_1 = __importDefault(require("./_icons/WTWLogoVertical"));
var Walker_1 = __importDefault(require("./_icons/Walker"));
var WalkingAid_1 = __importDefault(require("./_icons/WalkingAid"));
var Wallet_1 = __importDefault(require("./_icons/Wallet"));
var Warning_1 = __importDefault(require("./_icons/Warning"));
var WarningFilled_1 = __importDefault(require("./_icons/WarningFilled"));
var WashHands_1 = __importDefault(require("./_icons/WashHands"));
var WaterActivity_1 = __importDefault(require("./_icons/WaterActivity"));
var WaterBottle_1 = __importDefault(require("./_icons/WaterBottle"));
var WaterFountain_1 = __importDefault(require("./_icons/WaterFountain"));
var Weather_1 = __importDefault(require("./_icons/Weather"));
var WeightScale_1 = __importDefault(require("./_icons/WeightScale"));
var Whatsapp_1 = __importDefault(require("./_icons/Whatsapp"));
var WhatsappNeutral_1 = __importDefault(require("./_icons/WhatsappNeutral"));
var Wheelchair_1 = __importDefault(require("./_icons/Wheelchair"));
var WheelchairRamp_1 = __importDefault(require("./_icons/WheelchairRamp"));
var WheelchairUser_1 = __importDefault(require("./_icons/WheelchairUser"));
var WideEntranceShower_1 = __importDefault(require("./_icons/WideEntranceShower"));
var Wifi_1 = __importDefault(require("./_icons/Wifi"));
var Withdrawal_1 = __importDefault(require("./_icons/Withdrawal"));
var Work_1 = __importDefault(require("./_icons/Work"));
var WrittenInformation_1 = __importDefault(require("./_icons/WrittenInformation"));
var Youtube_1 = __importDefault(require("./_icons/Youtube"));
var YoutubeNeutral_1 = __importDefault(require("./_icons/YoutubeNeutral"));
exports.iconsArray = [
    'accessibility',
    'accessibilityprofile',
    'accessiblebathroom',
    'accessibleelevator',
    'accessibleequipment',
    'accessiblepaths',
    'accessibletransportation',
    'accommodation',
    'activities',
    'activity',
    'adaptiveequipment',
    'add',
    'adrenaline',
    'airconditioner',
    'airportshuttle',
    'alcoholicbeverages',
    'altitude',
    'arrowback',
    'arrowdown',
    'arrowforward',
    'arrowup',
    'art',
    'assistance',
    'atm',
    'attachment',
    'audioguides',
    'auditorium',
    'auditoryguidance',
    'baby',
    'backpack',
    'backpacker',
    'bagagge',
    'baggage',
    'balcony',
    'bar',
    'barbecue',
    'bathroom',
    'bathroomaccessinterior',
    'bathroominterior',
    'bathroomsink',
    'beachaccess',
    'beachfront',
    'bed',
    'bedbreakfast',
    'bedhoist',
    'bedroomaccess',
    'bedroominterior',
    'beerbar',
    'best',
    'bidet',
    'blind',
    'boat',
    'braille',
    'breakfast',
    'buildingcolor',
    'buildingentrance',
    'bus',
    'businesscenter',
    'ccheck',
    'ccheckfilled',
    'cdelete',
    'cabin',
    'cafeteria',
    'calendar',
    'camera',
    'car',
    'celebrate',
    'chair',
    'champagne',
    'changingroom',
    'chat',
    'check',
    'clock',
    'closebutton',
    'closebuttonfilled',
    'closedcaptions',
    'closet',
    'clothes',
    'coffeemaker',
    'cognitive',
    'cold',
    'comfortable',
    'comfortableenough',
    'comment',
    'commonbathroom',
    'companion',
    'complete',
    'completelyflat',
    'conference',
    'confused',
    'contrastmarking',
    'copy',
    'countries',
    'coupon',
    'creditcard',
    'crib',
    'crowded',
    'cruise',
    'crutches',
    'culturalplace',
    'culture',
    'currencyexchange',
    'customersupport',
    'daycare',
    'deaf',
    'delete',
    'deletesolid',
    'destinations',
    'dice',
    'dinner',
    'document',
    'documentation',
    'done',
    'doorhandle',
    'doublevideo',
    'download',
    'drycleaning',
    'duplicate',
    'edit',
    'education',
    'electricdevicewheelchair',
    'electricity',
    'elevator',
    'email',
    'entertainment',
    'entrance',
    'equipment',
    'eventroom',
    'exhibition',
    'extrafirmmattress',
    'extrasoftmattress',
    'facebook',
    'facebookneutral',
    'filter',
    'fitnesscenter',
    'fivehours',
    'foldablepowerwheelchair',
    'foodservice',
    'forgetful',
    'friendly',
    'garden',
    'generalattribute',
    'gentleslope',
    'google',
    'googleneutral',
    'gratuities',
    'groundtransportation',
    'guides',
    'gym',
    'hairdryer',
    'handshakecolor',
    'happy',
    'health',
    'hearingaid',
    'hearingloop',
    'heartbeat',
    'heatedpool',
    'heater',
    'heavypowerwheelchair',
    'heights',
    'helmet',
    'help',
    'helpfilled',
    'hide',
    'highbathtub',
    'home',
    'hot',
    'hotel',
    'housekeeping',
    'humidity',
    'id',
    'importantinfo',
    'inprogress',
    'instagram',
    'instagramneutral',
    'instructor',
    'insurance',
    'interior',
    'invite',
    'iron',
    'jacuzzi',
    'jeepcar',
    'key',
    'keys',
    'kingbed',
    'lakesea',
    'landactivity',
    'language',
    'language02',
    'languagemessage',
    'largeprint',
    'laundry',
    'level',
    'leverhandle',
    'lifevest',
    'linkarrow',
    'linkedin',
    'linkedinneutral',
    'lobby',
    'location',
    'locationblack',
    'lock',
    'logout',
    'lowerbathtub',
    'lowersteps',
    'lunch',
    'measuringtape',
    'meetingpoint',
    'meetingroom',
    'menu',
    'messengerneutral',
    'minifridge',
    'minus',
    'mirror',
    'missing',
    'missingalt',
    'mobilephone',
    'mobilephonev2',
    'money',
    'moneymoney',
    'moodswings',
    'more',
    'motel',
    'mountain',
    'multidaytrip',
    'multidaytrips',
    'narrowshower',
    'news',
    'next',
    'no',
    'nofees',
    'nophone',
    'noise',
    'notcomfortable',
    'notification',
    'notificationactive',
    'nurse',
    'nutrition',
    'onsale',
    'onehour',
    'onestep',
    'opentour',
    'other',
    'outdoor',
    'outdooramenities',
    'outdoorspace',
    'oven',
    'oxigen',
    'park',
    'parking',
    'partners',
    'pending',
    'person',
    'petfriendly',
    'phone',
    'physicalspace',
    'picnictable',
    'pinterest',
    'pinterestneutral',
    'places',
    'placestostay',
    'plane',
    'playground',
    'plus',
    'plusbig',
    'pregnantwoman',
    'previous',
    'privatetour',
    'profile',
    'profileoutline',
    'queenbed',
    'reception',
    'resort',
    'restaurant',
    'restrictions',
    'rollinshower',
    'roomaccess',
    'roomentrance',
    'roomillustration',
    'roomservice',
    'safe',
    'safetyequipment',
    'sauna',
    'save',
    'scooter',
    'search',
    'security',
    'sedancar',
    'senior',
    'sent',
    'servicedog',
    'settings',
    'sevenhours',
    'share',
    'sharearrow',
    'shop',
    'shopping',
    'shortdistances',
    'shower',
    'showergrabbar',
    'showerlowstep',
    'showerseat',
    'showerwheelchair',
    'signlanguage',
    'sink',
    'sinktap',
    'smallspaces',
    'smokefree',
    'snackbar',
    'snacks',
    'snapchat',
    'snapchatneutral',
    'socialdistancing',
    'softdrink',
    'sort',
    'spa',
    'stairhandrails',
    'stairs',
    'starempty',
    'starfull',
    'starhalf',
    'stepfree',
    'stepone',
    'steptwo',
    'sun',
    'suv',
    'swimmingpool',
    'switch',
    'tactilepaving',
    'tactilereferences',
    'taxes',
    'tea',
    'teamakingfacilities',
    'tearoom',
    'termsandconditions',
    'terrace',
    'thingstodo',
    'thirtyminutes',
    'threehours',
    'threesteps',
    'ticket',
    'tiktok',
    'tiktokneutral',
    'toilet',
    'toiletgrabbar',
    'toiletpaper',
    'tourguide',
    'toursactivities',
    'transport',
    'transportation',
    'transportationcolor',
    'traveltips',
    'traveler',
    'turningradius',
    'tv',
    'twentyfourhour',
    'twinbed',
    'twitter',
    'twitterneutral',
    'twoassistants',
    'twohours',
    'upload',
    'valetparking',
    'van',
    'vendingmachine',
    'verified',
    'veryslope',
    'videocamera',
    'view',
    'vimeo',
    'vimeoneutral',
    'wtwiso',
    'wtwlogo',
    'wtwlogonew',
    'wtwlogonewwhite',
    'wtwlogovertical',
    'walker',
    'walkingaid',
    'wallet',
    'warning',
    'warningfilled',
    'washhands',
    'wateractivity',
    'waterbottle',
    'waterfountain',
    'weather',
    'weightscale',
    'whatsapp',
    'whatsappneutral',
    'wheelchair',
    'wheelchairramp',
    'wheelchairuser',
    'wideentranceshower',
    'wifi',
    'withdrawal',
    'work',
    'writteninformation',
    'youtube',
    'youtubeneutral',
];
exports.iconsObject = {
    accessibility: Accessibility_1.default,
    accessibilityprofile: AccessibilityProfile_1.default,
    accessiblebathroom: AccessibleBathroom_1.default,
    accessibleelevator: AccessibleElevator_1.default,
    accessibleequipment: AccessibleEquipment_1.default,
    accessiblepaths: AccessiblePaths_1.default,
    accessibletransportation: AccessibleTransportation_1.default,
    accommodation: Accommodation_1.default,
    activities: Activities_1.default,
    activity: Activity_1.default,
    adaptiveequipment: AdaptiveEquipment_1.default,
    add: Add_1.default,
    adrenaline: Adrenaline_1.default,
    airconditioner: AirConditioner_1.default,
    airportshuttle: AirportShuttle_1.default,
    alcoholicbeverages: AlcoholicBeverages_1.default,
    altitude: Altitude_1.default,
    arrowback: ArrowBack_1.default,
    arrowdown: ArrowDown_1.default,
    arrowforward: ArrowForward_1.default,
    arrowup: ArrowUp_1.default,
    art: Art_1.default,
    assistance: Assistance_1.default,
    atm: Atm_1.default,
    attachment: Attachment_1.default,
    audioguides: Audioguides_1.default,
    auditorium: Auditorium_1.default,
    auditoryguidance: AuditoryGuidance_1.default,
    baby: Baby_1.default,
    backpack: Backpack_1.default,
    backpacker: Backpacker_1.default,
    bagagge: Bagagge_1.default,
    baggage: Baggage_1.default,
    balcony: Balcony_1.default,
    bar: Bar_1.default,
    barbecue: Barbecue_1.default,
    bathroom: Bathroom_1.default,
    bathroomaccessinterior: BathroomAccessInterior_1.default,
    bathroominterior: BathroomInterior_1.default,
    bathroomsink: BathroomSink_1.default,
    beachaccess: BeachAccess_1.default,
    beachfront: Beachfront_1.default,
    bed: Bed_1.default,
    bedbreakfast: BedBreakfast_1.default,
    bedhoist: BedHoist_1.default,
    bedroomaccess: BedroomAccess_1.default,
    bedroominterior: BedroomInterior_1.default,
    beerbar: BeerBar_1.default,
    best: Best_1.default,
    bidet: Bidet_1.default,
    blind: Blind_1.default,
    boat: Boat_1.default,
    braille: Braille_1.default,
    breakfast: Breakfast_1.default,
    buildingcolor: BuildingColor_1.default,
    buildingentrance: Buildingentrance_1.default,
    bus: Bus_1.default,
    businesscenter: BusinessCenter_1.default,
    ccheck: CCheck_1.default,
    ccheckfilled: CCheckFilled_1.default,
    cdelete: CDelete_1.default,
    cabin: Cabin_1.default,
    cafeteria: Cafeteria_1.default,
    calendar: Calendar_1.default,
    camera: Camera_1.default,
    car: Car_1.default,
    celebrate: Celebrate_1.default,
    chair: Chair_1.default,
    champagne: Champagne_1.default,
    changingroom: ChangingRoom_1.default,
    chat: Chat_1.default,
    check: Check_1.default,
    clock: Clock_1.default,
    closebutton: CloseButton_1.default,
    closebuttonfilled: CloseButtonFilled_1.default,
    closedcaptions: ClosedCaptions_1.default,
    closet: Closet_1.default,
    clothes: Clothes_1.default,
    coffeemaker: CoffeeMaker_1.default,
    cognitive: Cognitive_1.default,
    cold: Cold_1.default,
    comfortable: Comfortable_1.default,
    comfortableenough: ComfortableEnough_1.default,
    comment: Comment_1.default,
    commonbathroom: CommonBathroom_1.default,
    companion: Companion_1.default,
    complete: Complete_1.default,
    completelyflat: CompletelyFlat_1.default,
    conference: Conference_1.default,
    confused: Confused_1.default,
    contrastmarking: ContrastMarking_1.default,
    copy: Copy_1.default,
    countries: Countries_1.default,
    coupon: Coupon_1.default,
    creditcard: CreditCard_1.default,
    crib: Crib_1.default,
    crowded: Crowded_1.default,
    cruise: Cruise_1.default,
    crutches: Crutches_1.default,
    culturalplace: CulturalPlace_1.default,
    culture: Culture_1.default,
    currencyexchange: CurrencyExchange_1.default,
    customersupport: CustomerSupport_1.default,
    daycare: Daycare_1.default,
    deaf: Deaf_1.default,
    delete: Delete_1.default,
    deletesolid: DeleteSolid_1.default,
    destinations: Destinations_1.default,
    dice: Dice_1.default,
    dinner: Dinner_1.default,
    document: Document_1.default,
    documentation: Documentation_1.default,
    done: Done_1.default,
    doorhandle: DoorHandle_1.default,
    doublevideo: DoubleVideo_1.default,
    download: Download_1.default,
    drycleaning: DryCleaning_1.default,
    duplicate: Duplicate_1.default,
    edit: Edit_1.default,
    education: Education_1.default,
    electricdevicewheelchair: ElectricDeviceWheelchair_1.default,
    electricity: Electricity_1.default,
    elevator: Elevator_1.default,
    email: Email_1.default,
    entertainment: Entertainment_1.default,
    entrance: Entrance_1.default,
    equipment: Equipment_1.default,
    eventroom: EventRoom_1.default,
    exhibition: Exhibition_1.default,
    extrafirmmattress: ExtraFirmMattress_1.default,
    extrasoftmattress: ExtraSoftMattress_1.default,
    facebook: Facebook_1.default,
    facebookneutral: FacebookNeutral_1.default,
    filter: Filter_1.default,
    fitnesscenter: FitnessCenter_1.default,
    fivehours: FiveHours_1.default,
    foldablepowerwheelchair: FoldablePowerWheelchair_1.default,
    foodservice: FoodService_1.default,
    forgetful: Forgetful_1.default,
    friendly: Friendly_1.default,
    garden: Garden_1.default,
    generalattribute: GeneralAttribute_1.default,
    gentleslope: GentleSlope_1.default,
    google: Google_1.default,
    googleneutral: GoogleNeutral_1.default,
    gratuities: Gratuities_1.default,
    groundtransportation: GroundTransportation_1.default,
    guides: Guides_1.default,
    gym: Gym_1.default,
    hairdryer: HairDryer_1.default,
    handshakecolor: HandShakeColor_1.default,
    happy: Happy_1.default,
    health: Health_1.default,
    hearingaid: HearingAid_1.default,
    hearingloop: HearingLoop_1.default,
    heartbeat: Heartbeat_1.default,
    heatedpool: HeatedPool_1.default,
    heater: Heater_1.default,
    heavypowerwheelchair: HeavyPowerWheelchair_1.default,
    heights: Heights_1.default,
    helmet: Helmet_1.default,
    help: Help_1.default,
    helpfilled: HelpFilled_1.default,
    hide: Hide_1.default,
    highbathtub: HighBathtub_1.default,
    home: Home_1.default,
    hot: Hot_1.default,
    hotel: Hotel_1.default,
    housekeeping: Housekeeping_1.default,
    humidity: Humidity_1.default,
    id: Id_1.default,
    importantinfo: ImportantInfo_1.default,
    inprogress: InProgress_1.default,
    instagram: Instagram_1.default,
    instagramneutral: InstagramNeutral_1.default,
    instructor: Instructor_1.default,
    insurance: Insurance_1.default,
    interior: Interior_1.default,
    invite: Invite_1.default,
    iron: Iron_1.default,
    jacuzzi: Jacuzzi_1.default,
    jeepcar: JeepCar_1.default,
    key: Key_1.default,
    keys: Keys_1.default,
    kingbed: KingBed_1.default,
    lakesea: LakeSea_1.default,
    landactivity: LandActivity_1.default,
    language: Language_1.default,
    language02: Language02_1.default,
    languagemessage: LanguageMessage_1.default,
    largeprint: LargePrint_1.default,
    laundry: Laundry_1.default,
    level: Level_1.default,
    leverhandle: LeverHandle_1.default,
    lifevest: Lifevest_1.default,
    linkarrow: LinkArrow_1.default,
    linkedin: Linkedin_1.default,
    linkedinneutral: LinkedinNeutral_1.default,
    lobby: Lobby_1.default,
    location: Location_1.default,
    locationblack: LocationBlack_1.default,
    lock: Lock_1.default,
    logout: LogOut_1.default,
    lowerbathtub: LowerBathtub_1.default,
    lowersteps: LowerSteps_1.default,
    lunch: Lunch_1.default,
    measuringtape: MeasuringTape_1.default,
    meetingpoint: MeetingPoint_1.default,
    meetingroom: MeetingRoom_1.default,
    menu: Menu_1.default,
    messengerneutral: MessengerNeutral_1.default,
    minifridge: MiniFridge_1.default,
    minus: Minus_1.default,
    mirror: Mirror_1.default,
    missing: Missing_1.default,
    missingalt: MissingAlt_1.default,
    mobilephone: MobilePhone_1.default,
    mobilephonev2: MobilePhoneV2_1.default,
    money: Money_1.default,
    moneymoney: MoneyMoney_1.default,
    moodswings: MoodSwings_1.default,
    more: More_1.default,
    motel: Motel_1.default,
    mountain: Mountain_1.default,
    multidaytrip: MultiDayTrip_1.default,
    multidaytrips: MultiDayTrips_1.default,
    narrowshower: NarrowShower_1.default,
    news: News_1.default,
    next: Next_1.default,
    no: No_1.default,
    nofees: NoFees_1.default,
    nophone: NoPhone_1.default,
    noise: Noise_1.default,
    notcomfortable: NotComfortable_1.default,
    notification: Notification_1.default,
    notificationactive: NotificationActive_1.default,
    nurse: Nurse_1.default,
    nutrition: Nutrition_1.default,
    onsale: OnSale_1.default,
    onehour: OneHour_1.default,
    onestep: OneStep_1.default,
    opentour: OpenTour_1.default,
    other: Other_1.default,
    outdoor: Outdoor_1.default,
    outdooramenities: OutdoorAmenities_1.default,
    outdoorspace: OutdoorSpace_1.default,
    oven: Oven_1.default,
    oxigen: Oxigen_1.default,
    park: Park_1.default,
    parking: Parking_1.default,
    partners: Partners_1.default,
    pending: Pending_1.default,
    person: Person_1.default,
    petfriendly: PetFriendly_1.default,
    phone: Phone_1.default,
    physicalspace: PhysicalSpace_1.default,
    picnictable: PicnicTable_1.default,
    pinterest: Pinterest_1.default,
    pinterestneutral: PinterestNeutral_1.default,
    places: Places_1.default,
    placestostay: PlacesToStay_1.default,
    plane: Plane_1.default,
    playground: Playground_1.default,
    plus: Plus_1.default,
    plusbig: PlusBig_1.default,
    pregnantwoman: PregnantWoman_1.default,
    previous: Previous_1.default,
    privatetour: PrivateTour_1.default,
    profile: Profile_1.default,
    profileoutline: ProfileOutline_1.default,
    queenbed: QueenBed_1.default,
    reception: Reception_1.default,
    resort: Resort_1.default,
    restaurant: Restaurant_1.default,
    restrictions: Restrictions_1.default,
    rollinshower: RollInShower_1.default,
    roomaccess: RoomAccess_1.default,
    roomentrance: RoomEntrance_1.default,
    roomillustration: RoomIllustration_1.default,
    roomservice: RoomService_1.default,
    safe: Safe_1.default,
    safetyequipment: SafetyEquipment_1.default,
    sauna: Sauna_1.default,
    save: Save_1.default,
    scooter: Scooter_1.default,
    search: Search_1.default,
    security: Security_1.default,
    sedancar: SedanCar_1.default,
    senior: Senior_1.default,
    sent: Sent_1.default,
    servicedog: ServiceDog_1.default,
    settings: Settings_1.default,
    sevenhours: SevenHours_1.default,
    share: Share_1.default,
    sharearrow: ShareArrow_1.default,
    shop: Shop_1.default,
    shopping: Shopping_1.default,
    shortdistances: ShortDistances_1.default,
    shower: Shower_1.default,
    showergrabbar: ShowerGrabBar_1.default,
    showerlowstep: ShowerLowStep_1.default,
    showerseat: ShowerSeat_1.default,
    showerwheelchair: ShowerWheelchair_1.default,
    signlanguage: SignLanguage_1.default,
    sink: Sink_1.default,
    sinktap: SinkTap_1.default,
    smallspaces: SmallSpaces_1.default,
    smokefree: SmokeFree_1.default,
    snackbar: SnackBar_1.default,
    snacks: Snacks_1.default,
    snapchat: Snapchat_1.default,
    snapchatneutral: SnapchatNeutral_1.default,
    socialdistancing: SocialDistancing_1.default,
    softdrink: SoftDrink_1.default,
    sort: Sort_1.default,
    spa: Spa_1.default,
    stairhandrails: StairHandrails_1.default,
    stairs: Stairs_1.default,
    starempty: StarEmpty_1.default,
    starfull: StarFull_1.default,
    starhalf: StarHalf_1.default,
    stepfree: StepFree_1.default,
    stepone: StepOne_1.default,
    steptwo: StepTwo_1.default,
    sun: Sun_1.default,
    suv: Suv_1.default,
    swimmingpool: SwimmingPool_1.default,
    switch: Switch_1.default,
    tactilepaving: TactilePaving_1.default,
    tactilereferences: TactileReferences_1.default,
    taxes: Taxes_1.default,
    tea: Tea_1.default,
    teamakingfacilities: TeaMakingFacilities_1.default,
    tearoom: TeaRoom_1.default,
    termsandconditions: TermsAndConditions_1.default,
    terrace: Terrace_1.default,
    thingstodo: ThingsToDo_1.default,
    thirtyminutes: ThirtyMinutes_1.default,
    threehours: ThreeHours_1.default,
    threesteps: ThreeSteps_1.default,
    ticket: Ticket_1.default,
    tiktok: Tiktok_1.default,
    tiktokneutral: TiktokNeutral_1.default,
    toilet: Toilet_1.default,
    toiletgrabbar: ToiletGrabBar_1.default,
    toiletpaper: ToiletPaper_1.default,
    tourguide: TourGuide_1.default,
    toursactivities: ToursActivities_1.default,
    transport: Transport_1.default,
    transportation: Transportation_1.default,
    transportationcolor: TransportationColor_1.default,
    traveltips: TravelTips_1.default,
    traveler: Traveler_1.default,
    turningradius: TurningRadius_1.default,
    tv: Tv_1.default,
    twentyfourhour: TwentyFourHour_1.default,
    twinbed: TwinBed_1.default,
    twitter: Twitter_1.default,
    twitterneutral: TwitterNeutral_1.default,
    twoassistants: TwoAssistants_1.default,
    twohours: TwoHours_1.default,
    upload: Upload_1.default,
    valetparking: ValetParking_1.default,
    van: Van_1.default,
    vendingmachine: VendingMachine_1.default,
    verified: Verified_1.default,
    veryslope: VerySlope_1.default,
    videocamera: VideoCamera_1.default,
    view: View_1.default,
    vimeo: Vimeo_1.default,
    vimeoneutral: VimeoNeutral_1.default,
    wtwiso: WTWIso_1.default,
    wtwlogo: WTWLogo_1.default,
    wtwlogonew: WTWLogoNew_1.default,
    wtwlogonewwhite: WTWLogoNewWhite_1.default,
    wtwlogovertical: WTWLogoVertical_1.default,
    walker: Walker_1.default,
    walkingaid: WalkingAid_1.default,
    wallet: Wallet_1.default,
    warning: Warning_1.default,
    warningfilled: WarningFilled_1.default,
    washhands: WashHands_1.default,
    wateractivity: WaterActivity_1.default,
    waterbottle: WaterBottle_1.default,
    waterfountain: WaterFountain_1.default,
    weather: Weather_1.default,
    weightscale: WeightScale_1.default,
    whatsapp: Whatsapp_1.default,
    whatsappneutral: WhatsappNeutral_1.default,
    wheelchair: Wheelchair_1.default,
    wheelchairramp: WheelchairRamp_1.default,
    wheelchairuser: WheelchairUser_1.default,
    wideentranceshower: WideEntranceShower_1.default,
    wifi: Wifi_1.default,
    withdrawal: Withdrawal_1.default,
    work: Work_1.default,
    writteninformation: WrittenInformation_1.default,
    youtube: Youtube_1.default,
    youtubeneutral: YoutubeNeutral_1.default,
};
function isValidIcon(possibleIcon) {
    return possibleIcon && typeof possibleIcon === 'string' && possibleIcon in exports.iconsObject;
}
exports.isValidIcon = isValidIcon;
//# sourceMappingURL=helpers.js.map