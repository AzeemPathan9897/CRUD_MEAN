// import { Component, OnInit, OnDestroy } from "@angular/core";
// import { ListingService } from "../service/listing.service";
// import { ActivatedRoute, Router } from "@angular/router";
// import { Listing } from "../model/listing";
// import { Subscription } from "rxjs";
// import { FormControl, FormGroup, Validators } from "@angular/forms";
// import { UserService } from "src/app/user/service/user.service";

// @Component({
//   selector: 'app-listing-detail',
//   templateUrl: './listing-detail.component.html',
//   styleUrls: ['./listing-detail.component.css']
// })

// export  class  ListingDetailComponent  implements  OnInit ,  OnDestroy {
//   id!: String; 

//   listing!: Listing;

//   listingSub$!: Subscription;

//   showForm!: boolean;

//   editListingForm = new FormGroup({
//     title: new FormControl("",[Validators.required]),
//     price: new FormControl("",[Validators.required]),
//     locality: new FormControl("",[Validators.required]),
//     details: new FormControl("",[Validators.required]),

//   });
//   constructor(
//     private listingService: ListingService,
//     private route: ActivatedRoute,
//     private router:Router,
//     private userService: UserService
//   ) {}

//   ngOnInit()  {   
//     this.id = this.route.snapshot.paramMap.get("id");
//     this.listingSub$ = this.listingService
//       .getListing(this.id)
//       .subscribe(listing => {
//         this.listing = listing;
//       });
//   }

//   ngOnDestroy():void {
//     this.listingSub$.unsubscribe();
//   }

//   showEdit(){
//     this.showForm = !this.showForm
//   }

//   editListing(){
//     this.id = this.route.snapshot.paramMap.get("id");
//     if(this.editListingForm.valid){
//       this.listingService.editListing(this.editListingForm.value,this.id).subscribe(res =>{
//         this.editListingForm.reset();
//         this.router.navigate(["/listings"]);
//       })
//     }
//   }
//   removeListing(){
//     this.id = this.route.snapshot.paramMap.get("id");
//     this.listingService.deleteListing(this.id).subscribe(res =>{
//       console.log(res);
//       this.router.navigate(["/listings"]);
//     });
//   }
// }

import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";
import { Listing } from "../model/listing";
import { ListingService } from "../service/listing.service";

@Component({
      selector: 'app-listing-detail',
      templateUrl: './listing-detail.component.html',
      styleUrls: ['./listing-detail.component.css']
    })

    export  class  ListingDetailComponent  implements  OnInit , OnDestroy{

        id!: String;

        listing!: Listing;

        listingSub$!: Subscription;

        constructor(private listingService: ListingService, private route: ActivatedRoute) {}

        ngOnInit(this: any)  {
            this.id = this.route.snapshot.paramMap.get("id");
            this.listingSub$ = this.listingService
            .getListing(this.id)
            .subscribe((listing: any) => {
              this.listing = listing;
            });
        }
        ngOnDestroy(): void {
            this.listingSub$.unsubscribe();
        }
    }        