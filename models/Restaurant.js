const mongoose = require("mongoose");

const RestaurantSchema = new mongoose.Schema({
  _id: {
    $oid: {
      type: "ObjectId"
    }
  },
  restaurant_name: {
    type: "String"
  },
  postcode: {
    type: "String"
  },
  city: {
    type: "String"
  },
  town: {
    type: "String"
  },
  street_address: {
    type: "String"
  },
  reservation_tel: {
    type: "String"
  },
  business_tel: {
    type: "String"
  },
  logo: {
    type: "String"
  },
  email: {
    type: "String"
  },
  latitude: {
    type: "String"
  },
  longitude: {
    type: "String"
  },
  domain: {
    type: "String"
  },
  restaurant_mode_message: {
    type: "String"
  },
  area_code: {
    type: "String"
  },
  country: {
    type: "String"
  },
  currency: {
    type: "String"
  },
  service_charge: {
    $numberInt: {
      type: "Date"
    }
  },
  vat: {
    $numberInt: {
      type: "Date"
    }
  },
  social_media: {
    type: ["Mixed"]
  },
  schedule: {
    type: ["Mixed"]
  },
  discounts: {
    type: "Array"
  },
  offers: {
    type: "Array"
  },
  restaurant_mode: {
    $numberInt: {
      type: "Date"
    }
  },
  auto_accept_order: {
    type: "Boolean"
  },
  auto_accept_reservation: {
    type: "Boolean"
  },
  is_ordering_sms: {
    type: "Boolean"
  },
  is_booking_sms: {
    type: "Boolean"
  },
  is_ordering: {
    type: "Boolean"
  },
  is_reservation: {
    type: "Boolean"
  },
  is_collection: {
    type: "Boolean"
  },
  is_delivery: {
    type: "Boolean"
  },
  priceRange: {
    type: "String"
  },
  kids_zone: {
    type: "String"
  },
  private_party_facilities: {
    type: "String"
  },
  additional_info: {
    type: "String"
  },
  executive_chef: {
    type: "String"
  },
  payment_options: {
    type: "String"
  },
  public_transit: {
    type: "String"
  },
  parking_details: {
    type: "String"
  },
  dress_code: {
    type: "String"
  },
  dining_style: {
    type: "String"
  },
  city_or_town: {
    type: "String"
  },
  cover_image: {
    type: "String"
  },
  cuisine_name: {
    type: "String"
  },
  support_order_notifications: {
    type: "Boolean"
  },
  support_reservation_notifications: {
    type: "Boolean"
  }
});

const Restaurant = mongoose.model("restaurants", RestaurantSchema);
module.exports = Restaurant;