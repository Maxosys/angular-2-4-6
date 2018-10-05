import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


//Software Development import module

import { HomeComponent } from './home/home.component';
import { CareerComponent } from './careers/career.component';
import { BlogComponent } from './blog/blog.component';
import { BlogDetailComponent } from './blog/blog-detail.component';
import { ProductComponent } from './software/product.component';
import { ApplicationComponent } from './software/application.component';
import { MigrationComponent } from './software/migration.component';
import { MaintnanceComponent } from './software/maintnance.component';
import { HrmComponent } from './software/hrm.component';
import { EnterpriseInnovationComponent } from './software/enterprise-innovation.component';
import { EmbadedComponent } from './software/embaded.component';
import { SaasComponent } from './software/saas.component';
import { CrmComponent } from './software/crm.component';
import { EcmComponent } from './software/ecm.component';
import { CodeComponent } from './software/code.component';
import { TestingComponent } from './software/testing.component';
import { OptimizingComponent } from './software/optimizing.component';
import { AgileComponent } from './software/agile.component';
import { DevopsComponent } from './software/devops.component';
import { EnterpriseComponent } from './software/enterprise.component';
import { BusinessComponent } from './software/business.component';
import { BigdataComponent } from './software/bigdata.component';
import { AgilededicatedComponent } from './software/agilededicated.component';
import { BuildComponent } from './software/build.component';
import { OdcComponent } from './software/odc.component';
import { OffshoreSoftwareComponent } from './software/offshore-software.component';
import { OffshoreDevelopmentComponent } from './software/offshore-development.component';
import { MobilityComponent } from './software/mobility.component';
import { SapComponent } from './software/Sap.component';

         //Webapp module import module

import { IcoComponent } from './webapp/ico.component';
import { BlockchainComponent } from './webapp/Blockchain.component';
import { AngularComponent } from './webapp/angular.component';
import { JavaComponent } from './webapp/java.component';
import { NodeComponent } from './webapp/node.component';
import { PaymentComponent } from './webapp/payment.component';
import { AwsComponent } from './webapp/aws.component';
import { KendoComponent } from './webapp/kendo.component';
import { RestApiComponent } from './webapp/RestApi.component';
import { SymfonyComponent } from './webapp/symfony.component';
import { LaravelComponent } from './webapp/laravel.component';
import { CodeigniterComponent } from './webapp/codeigniter.component';
import { YiiComponent } from './webapp/yii.component';
import { RubyComponent } from './webapp/ruby.component';
import { HotelComponent } from './webapp/hotel.component';
import { CabComponent } from './webapp/cab.component'; 
import { WordpressComponent } from './webapp/wordpress.component';
import { WoocommerceComponent } from './webapp/woocommerce.component';
import { BuddypressComponent } from './webapp/buddypress.component';
import { MagnetoComponent } from './webapp/magneto.component';
import { DrupalComponent } from './webapp/drupal.component';
import { JoomlaComponent } from './webapp/joomla.component';
import { SugarCrmComponent } from './webapp/sugar-crm.component';
import { ContentManagementComponent } from './webapp/content-management.component';
import { EcommerceComponent } from './webapp/ecommerce.component';
import { MembershipComponent } from './webapp/membership.component';
import { ProgressiveWebComponent } from './webapp/progressive-web.component';
import { CrowdFundingComponent } from './webapp/crowd-funding.component';
import { CustomerFacingComponent } from './webapp/customer-facing.component';


  //mobilty import module ///

  import { AndroidComponent } from './mobility/android.component';
  import { IphoneComponent } from './mobility/iphone.component';
  import { IpadComponent } from './mobility/ipad.component';
  import { IonicComponent } from './mobility/ionic.component';
  import { IosComponent } from './mobility/ios.component';
  import { WindowsComponent } from './mobility/windows.component';
  import { WindowsPhoneComponent } from './mobility/windows-phone.component';  
  import { IbeaconComponent } from './mobility/i-beacon.component';
  import { EclipseComponent } from './mobility/eclipse.component';
  import { IonicAppComponent } from './mobility/ionic-app.component';
  import { PhonegapComponent } from './mobility/phonegap.component';
  import { BusinessProcessComponent } from './mobility/business-process.component';
  import { MobileBusinessComponent } from './mobility/mobile-business.component';
  import { B2bComponent } from './mobility/b2b.component';
  import { EnterpriseIosComponent } from './mobility/enterprise-ios.component';
  import { EnterpriseAndroidComponent } from './mobility/enterprise-android.component';
  import { AutomationComponent } from './mobility/automation.component'; 
  import { BasicSoftwareComponent } from './mobility/basic-software.component';
  import { AgileTestingComponent } from './mobility/agile-testing.component';
  import { BugdefectComponent } from './mobility/bug-defect.component';
  import { SecurityComponent } from './mobility/security.component';
  import { CookieComponent } from './mobility/cookie.component';
  import { CrowdsourcedComponent } from './mobility/crowdsourced.component';
  import { DatabaseComponent } from './mobility/database.component';
  import { ServerManagementComponent } from './mobility/server-management.component';
  
  //industry import module///
  
 import { AutomotiveComponent } from './industries/automotive.component';
 import { BankingComponent } from './industries/banking.component';
 import { CommunicationComponent } from './industries/communication.component';
 import { ConsumerComponent } from './industries/consumer.component';
 import { EnergyComponent } from './industries/energy.component';
 import { MediaComponent } from './industries/media.component';
 import { NaturalComponent } from './industries/natural.component';
 import { NetworkComponent } from './industries/network.component';
 import { PharmaceuticalComponent } from './industries/pharmaceutical.component';
 import { GovernmentComponent } from './industries/government.component';
 import { HealthcareComponent } from './industries/healthcare.component';
 import { HiTechComponent } from './industries/hi-tech.component';
 import { InsuranceComponent } from './industries/insurance.component';
 import { EngineeringComponent } from './industries/engineering.component';
 import { RetailComponent } from './industries/retail.component';
 import { SecuritiesComponent } from './industries/securities.component';
 import { TransportationComponent } from './industries/transportation.component';
 import { UtilitiesComponent } from './industries/utilities.component';
 import { TestimonialsComponent } from './testimonials/testimonials.component';
 import { AboutusComponent } from './aboutus/aboutus.component';
 
    //root start
 
const routes: Routes = [ 
    { path: '', pathMatch: 'full', component: HomeComponent,data:{title:'Offshore Custom Software,Mobile Apps & DAPP development Company|Maxosys'} },
    { path: 'career',component:CareerComponent,data:{title:'Careers | Maxosys'}},
    { path: 'blog',component:BlogComponent,data:{title:'Blog |Maxosys Ltd '}},  
    { path: 'blog-detail/:id',component:BlogDetailComponent},
       // Software toot 
         
    { path: 'software-product-development',component:ProductComponent,data:{title:'Product Development|Maxosys Ltd'}},  
    { path: 'software-application-development',component:ApplicationComponent,data:{title:'Application Development|Maxosys Ltd'}}, 
    { path: 'software-migration-reengineering',component:MigrationComponent,data:{title:'Migration Reengineering|Maxosys Ltd'}},
    { path: 'software-maintnance-enhancement',component:MaintnanceComponent,data:{title:'Maintenance Enhancement|Maxosys Ltd'}},
    { path: 'software-enterprice-hrm',component:HrmComponent,data:{title:'Enterprise HRM|Maxosys Ltd'}},
    { path: 'Embeded-team-Optimization',component:EmbadedComponent,data:{title:'Embedded Team Optimization|Maxosys Ltd'}},
    { path: 'software-saas-developments',component:SaasComponent,data:{title:'Sass Developments|Maxosys Ltd'}},
    { path: 'software-enterprise-crm',component:CrmComponent,data:{title:'Enterprise CRM|Maxosys Ltd'}},
    { path: 'software-enterprise-ecm',component:EcmComponent,data:{title:'Enterprise ECM|Maxosys Ltd'} }, 
    { path: 'software-enterprise-innovation-idea',component:EnterpriseInnovationComponent,data:{title:'Enterprise Innovation Idea|Maxosys Ltd'} }, 
    { path: 'software-code-rescue',component:CodeComponent,data:{title:'Code Rescue|Maxosys Ltd'} }, 
    { path: 'software-software-qa-testing',component:TestingComponent,data:{title:'Software QA Testing|Maxosys Ltd'} },
    { path: 'software-optimizing-it-organizations',component:OptimizingComponent,data:{title:'Optimizing IT Organizations|Maxosys Ltd'} }, 
    { path: 'software-agile-marketing',component:AgileComponent ,data:{title:'Agile Marketing|Maxosys Ltd'}}, 
    { path: 'software-devops-consultants',component:DevopsComponent,data:{title:'Devops Consultants|Maxosys Ltd'} },    
    { path: 'software-enterprise-resource-planning',component:EnterpriseComponent,data:{title:'Enterprise Resource Planning|Maxosys Ltd'} },
    { path: 'software-business-intelligence',component:BusinessComponent ,data:{title:'Business Intelligence|Maxosys Ltd'}},
    { path: 'software-big-data-and-analytics',component:BigdataComponent ,data:{title:'Big Data Analytics|Maxosys Ltd'}},
    { path: 'software-agile-dedicated-teams',component:AgilededicatedComponent,data:{title:'Agile Dedicated Teams|Maxosys Ltd'} }, 
    { path: 'software-build-operate-transfer',component:BuildComponent,data:{title:'Build Operate Transfer|Maxosys Ltd'} }, 
    { path: 'software-odc-fixed',component:OdcComponent,data:{title:'ODC Fixed|Maxosys Ltd'} }, 
    { path: 'software-offshore-software-testing',component:OffshoreSoftwareComponent,data:{title:'Offshore Software Testing|Maxosys Ltd'} }, 
    { path: 'software-offshore-development-center',component:OffshoreDevelopmentComponent,data:{title:'Offshore Development Center|Maxosys Ltd'} }, 
    { path: 'software-enterprise-mobility',component:MobilityComponent,data:{title:'Enterprise Mobility|Maxosys Ltd'} } , 
    { path: 'software-sap-development-consultant',component:SapComponent,data:{title:'Sap Development Consultant|Maxosys Ltd'} } , 
           

           //  mobility root//
     
    { path: 'mobility-android-app-development',component:AndroidComponent,data:{title:'Android app developer |Maxosys Ltd'} },

    { path: 'mobility-iphone-app-development',component:IphoneComponent ,data:{title:'iPhone app developer |Maxosys Ltd'}}, 
    { path: 'mobility-ipad-app-development',component:IpadComponent,data:{title:'iPad app developer |Maxosys Ltd'} },
    { path: 'mobility-ionic-hybrid-developer',component:IonicComponent,data:{title:'Ionic hybrid developer |Maxosys Ltd'} },
    { path: 'mobility-ios-objective-c',component:IosComponent,data:{title:'IOS objective c developer |Maxosys Ltd'} }, 
    { path: 'mobility-mobileappdevelopment',component:WindowsComponent,data:{title:'Window app developer |Maxosys Ltd'}  },     
    { path: 'mobility-windows-phone-sdk-j2mee',component:WindowsPhoneComponent,data:{title:'Windows phone SDK/J2MEE | Maxosys Ltd'} },
    { path: 'mobility-i-beacons-apps-development-servcies',component:IbeaconComponent ,data:{title:'i beacons app development servcies|Maxosys Ltd'}},
    { path: 'mobility-android-eclipse',component:EclipseComponent,data:{title:'Android eclipse developer |Maxosys Ltd'} },
    { path: 'mobility-ionic-apps-development-services',component:IonicAppComponent,data:{title:'Ionic apps development services | Maxosys Ltd'} },
    { path: 'mobility-phonegap-html5-mobile',component:PhonegapComponent,data:{title:'Phonegap html5 Mobile | Maxosys Ltd'} },
    { path: 'mobility-mobile-business-intellegence-bi',component:MobileBusinessComponent,data:{title:'Mobile business intellegence BI | Maxosys Ltd'} },
    { path: 'mobility-business-process-mobilization-bpm',component:BusinessProcessComponent,data:{title:' Business process mobilization BPM | Maxosys Ltd'} },
    { path: 'mobility-b2b-mobile-apps-development',component:B2bComponent,data:{title:'  B2B mobile apps development | Maxosys Ltd'} },
    { path: 'mobility-enterprise-ios-app-development',component:EnterpriseIosComponent,data:{title:'  Maxosys | Home'} },
    { path: 'mobility-enterprise-android-app',component:EnterpriseAndroidComponent,data:{title:'  Enterprise android apps | Maxosys Ltd'} },
    { path: 'mobility-agile-testing',component:AgileTestingComponent,data:{title:' Agile testing | Maxosys Ltd'}},
    { path: 'mobility-automation-testing',component:AutomationComponent,data:{title:'Automation testing | Maxosys Ltd'} },
    { path: 'mobility-basics-of-software-testing',component:BasicSoftwareComponent ,data:{title:'Basics of software testing | Maxosys Ltd'}},
    { path: 'mobility-bug-defect-tracking',component:BugdefectComponent,data:{title:'Bug defect tracking | Maxosys Ltd'} },
    { path: 'mobility-security-testing',component:SecurityComponent ,data:{title:'Security testing | Maxosys Ltd'} },
    { path: 'mobility-cookie-testing',component:CookieComponent,data:{title:'Cookie test | Maxosys Ltd'} },
    { path: 'mobility-database-testing',component:DatabaseComponent ,data:{title:'Database testing | Maxosys Ltd'}},
    { path: 'mobility-crowdsourced-testing',component:CrowdsourcedComponent,data:{title:'Crowd Sourced testing | Maxosys Ltd'} },
    { path: 'mobility-server-management',component:ServerManagementComponent,data:{title:'Server Management | Maxosys Ltd'} },

    
            //webapp path root
            
     { path: 'Blockchain-Ethereum-Cryptocurrency-ico-development-company',component:BlockchainComponent ,data:{title:'Blockchain-Ethereum-Cryptocurrency-ico-development-company | Maxosys'} }, 
     { path: 'Ico-Ethereum-Cryptocurrency-ico-development-company',component:IcoComponent ,data:{title:'Ico-Ethereum-Cryptocurrency-ico-development-company | Maxosys'} }, 

     { path: 'webapps-angular-js',component:AngularComponent,data:{title:'Angular Js Development | Maxosys'} },
     { path: 'webapps-javacore-developer',component:JavaComponent ,data:{title:'CORE JAVA, JSP , ADVANCED JAVA  | Maxosys'}},       
     { path: 'webapps-node-js-developer',component: NodeComponent,data:{title:'Node-Js-Developer|Maxosys Ltd'} },
     { path: 'webapps-payment-gateway',component: PaymentComponent ,data:{title:'Payment Gateway |Maxosys Ltd'}}, 
     { path: 'webapps-aws-amazon-s3',component: AwsComponent,data:{title:'AWS Amazon S3|Maxosys Ltd'} },               
     { path: 'webapps-kendo-ui',component: KendoComponent,data:{title:'Kendo UI|Maxosys Ltd'} },                                
     { path: 'webapps-rest-api-integration',component: RestApiComponent ,data:{title:'Rest API Integration|Maxosys Ltd'}},                                               
     { path: 'webapps-symfony-developer',component: SymfonyComponent ,data:{title:' Symfony Developer|Maxosys'}},  
     { path: 'webapps-laravel-developer',component: LaravelComponent,data:{title:' Laravel Developer| Maxosys'} }, 
     { path: 'webapps-codeigniter-developer',component: CodeigniterComponent,data:{title:' Codeigniter Developer|Maxosys Ltd'} }, 
     { path: 'webapps-yii-developer',component: YiiComponent,data:{title:' Yii-1 and Yii-2 Frameworks Developer | Maxosys'} },
     { path: 'webapps-ruby-on-rails-developer',component: RubyComponent,data:{title:' Ruby on Rails Developer|Maxosys Ltd'} },
     { path: 'webapps-hotel-booking',component: HotelComponent,data:{title:' Hotel Booking | Maxosys Ltd'} },
     { path: 'webapps-cab-booking',component: CabComponent ,data:{title:' Cab Booking |Maxosys Ltd'}},   
     { path: 'webapps-wordpress-development',component:WordpressComponent,data:{title:' Wordpress-Development-Service|Maxosys Ltd'}},
     { path: 'webapps-woocommerce-development',component:WoocommerceComponent,data:{title:' Woocommerce-Development-Service|Maxosys Ltd'}},
     { path: 'webapps-buddypress-development',component:BuddypressComponent,data:{title:' Buddypress-Development-Service|Maxosys Ltd'}},
     { path: 'webapps-magneto-development',component:MagnetoComponent,data:{title:' Magneto-Development-Service|Maxosys Ltd'}},
     { path: 'webapps-drupal-development',component:DrupalComponent,data:{title:' Drupal-Development-Service|Maxosys Ltd'}},
     { path: 'webapps-joomla-development',component:JoomlaComponent,data:{title:' Joomla Developer|Maxosys Ltd'}},
     { path: 'webapps-sugar-crm-development',component:SugarCrmComponent,data:{title:'Sugar CRM Developer | Maxosys'}},
     { path: 'webapps-content-management-system',component:ContentManagementComponent,data:{title:'Content Management System |Maxosys Ltd'}},
     { path: 'webapps-ecommerce-applications',component:EcommerceComponent,data:{title:' e-commerce applications|Maxosys Ltd'}},
     { path: 'webapps-membership-site-developer',component:MembershipComponent,data:{title:' Membership Site Developer |Maxosys Ltd'}},
     { path: 'webapps-progressive-web-application',component:ProgressiveWebComponent,data:{title:' Progressive Web Application |Maxosys Ltd'}},
     { path: 'webapps-crowd-funding-web-developer',component:CrowdFundingComponent,data:{title:' Crowd Funding Web Developer |Maxosys Ltd'}},
     { path: 'webapps-customer-facing-web-portals',component:CustomerFacingComponent,data:{title:' Customer Facing Web Portals |Maxosys Ltd'}},
     
       //industry path root                                                                                                                                                        
     { path: 'industries-automotive-services',component: AutomotiveComponent ,data:{title:' Industries automative services | Maxosys Ltd'}}, 
     { path: 'industries-Banking-services',component: BankingComponent ,data:{title:' Industries banking services | Maxosys Ltd'}},
     { path: 'industries-communication-service-providers',component: CommunicationComponent,data:{title:' Communication service providers | Maxosys Ltd'} },                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
     { path: 'industries-consumer-goods',component: ConsumerComponent,data:{title:'Consumer goods | Maxosys Ltd'} },
     { path: 'industries-energy',component: EnergyComponent ,data:{title:'Energy | Maxosys Ltd'}}, 
     { path: 'industries-media-entertainment-publishing-services',component: MediaComponent,data:{title:'Media Entertainment & Publishing services | Maxosys Ltd'} },
     { path: 'industries-natural-resources-services',component: NaturalComponent ,data:{title:' Natural resources service | Maxosyst Ltd'}}, 
     { path: 'industries-network-equipment-provider',component: NetworkComponent ,data:{title:'  Network equipment provider | Maxosys Ltd'}}, 
     { path: 'industries-pharmaceutical-life-sciences-services',component:PharmaceuticalComponent ,data:{title:'  Pharmaceutical & life sciences service | Maxosys Ltd'}},      
     { path: 'industries-government',component:GovernmentComponent ,data:{title:'  Government | Maxosys Ltd'}}, 
     { path: 'industries-healthcare',component:HealthcareComponent ,data:{title:'  healthcare | Maxosys Ltd'}},  
     { path: 'industries-hi-tech',component:HiTechComponent,data:{title:'  Hi-Tech | Maxosys Ltd'} },  
     { path: 'industries-insurance',component:InsuranceComponent,data:{title:'  Insurance | Maxosys Ltd'} },
     { path: 'industries-engineering-and-construction',component:EngineeringComponent ,data:{title:'Engineering & construction | Maxosys Ltd'}},
     { path: 'industries-retail',component:RetailComponent ,data:{title:'Retail | Maxosys Ltd'}},  
     { path: 'industries-securities-and-capital-markets',component:SecuritiesComponent,data:{title:'Securities & capital markets| Maxosys Ltd'}}, 
     { path: 'industries-transportation',component:TransportationComponent,data:{title:'Transportation | Maxosys Ltd'}},
     { path: 'industries-utilities',component:UtilitiesComponent,data:{title:'Utilities | Maxosys Ltd'}},
     { path: 'testimonials',component:TestimonialsComponent,data:{title:'Testimonials | Maxosys Ltd'}},
     { path: 'about-us',component:AboutusComponent,data:{title:'About Us | Maxosys Ltd'}},
     
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];


@NgModule({
     exports: [RouterModule],
     imports: [RouterModule.forRoot(routes)]
   
})
export class AppRoutingModule { }

export const routedComponents = [
 HomeComponent,
 CareerComponent,
 ProductComponent,
 ApplicationComponent,
 MigrationComponent,
 MaintnanceComponent,
 HrmComponent,
 EmbadedComponent,
 SaasComponent,
 CrmComponent,
 EcmComponent,
 CodeComponent,
 TestingComponent,
 OptimizingComponent,
 AgileComponent,
 DevopsComponent,
 BlockchainComponent,
 EnterpriseComponent,
 BusinessComponent,
 BigdataComponent,
 AgilededicatedComponent,
 BuildComponent,
 OdcComponent,
 OffshoreSoftwareComponent,
 OffshoreDevelopmentComponent,
 AngularComponent,
 JavaComponent,
 NodeComponent,
 PaymentComponent,
 AwsComponent,
 KendoComponent,
 RestApiComponent,
 SymfonyComponent,
 LaravelComponent,
 CodeigniterComponent,
 YiiComponent,
 RubyComponent,
 HotelComponent,
 CabComponent,
 AutomotiveComponent,
 BankingComponent,
 CommunicationComponent,
 ConsumerComponent,
 EnergyComponent,
 MediaComponent,
 NaturalComponent,
 NetworkComponent,
 PharmaceuticalComponent,
 GovernmentComponent,
 HealthcareComponent,
 HiTechComponent,
 InsuranceComponent,
 EngineeringComponent,
 RetailComponent,
 SecuritiesComponent,
 TransportationComponent,
 UtilitiesComponent,
 WordpressComponent,
 WoocommerceComponent,
 BuddypressComponent,
 MagnetoComponent,
 AndroidComponent,
 IphoneComponent,
 IpadComponent,
 IonicComponent,
 IosComponent,
 WindowsComponent,
 WindowsPhoneComponent,
 IbeaconComponent,
 EclipseComponent,
 IonicAppComponent,
 PhonegapComponent,
 MobileBusinessComponent,
 BusinessProcessComponent,
 B2bComponent,
 EnterpriseAndroidComponent,
 AgileTestingComponent,
 AutomationComponent,
 BasicSoftwareComponent,
 SecurityComponent,
 CookieComponent,
 DatabaseComponent,
 ServerManagementComponent,
 EnterpriseIosComponent,
 BugdefectComponent,
 DrupalComponent,
 JoomlaComponent,
 SugarCrmComponent,
 EcommerceComponent,
 MembershipComponent,
 ProgressiveWebComponent,
 CrowdFundingComponent,
 ContentManagementComponent,
 CrowdsourcedComponent,
 MobilityComponent,
 EnterpriseInnovationComponent,
 SapComponent,
 CustomerFacingComponent,
 BlogComponent,
 BlogDetailComponent,
 IcoComponent

];