import Appointment_Image from "./Appointment_Image.png";
import Header_Image from "./Header_Image.png";
import Group_Profiles from "./Group_Profiles.png";
import Profile_Picture from "./Profile_Picture.png";
import Contact_Image from "./Contact_Image.png";
import About_Image from "./About_Image.png";
import Logo from "./Logo.png";

import Doctor_1 from "./Doctor_1.png";
import Doctor_2 from "./Doctor_2.png";
import Doctor_3 from "./Doctor_3.png";
import Doctor_4 from "./Doctor_4.png";
import Doctor_5 from "./Doctor_5.png";
import Doctor_6 from "./Doctor_6.png";
import Doctor_7 from "./Doctor_7.png";
import Doctor_8 from "./Doctor_8.png";
import Doctor_9 from "./Doctor_9.png";
import Doctor_10 from "./Doctor_10.png";
import Doctor_11 from "./Doctor_11.png";
import Doctor_12 from "./Doctor_12.png";
import Doctor_13 from "./Doctor_13.png";
import Doctor_14 from "./Doctor_14.png";
import Doctor_15 from "./Doctor_15.png";
import Doctor_16 from "./Doctor_16.png";
import Doctor_17 from "./Doctor_17.png";
import Doctor_18 from "./Doctor_18.png";
import Doctor_19 from "./Doctor_19.png";
import Doctor_20 from "./Doctor_20.png";
import Doctor_21 from "./Doctor_21.png";
import Doctor_22 from "./Doctor_22.png";
import Doctor_23 from "./Doctor_23.png";
import Doctor_24 from "./Doctor_24.png";
import Doctor_25 from "./Doctor_25.png";
import Doctor_26 from "./Doctor_26.png";
import Doctor_27 from "./Doctor_27.png";
import Doctor_28 from "./Doctor_28.png";
import Doctor_29 from "./Doctor_29.png";
import Doctor_30 from "./Doctor_30.png";
import Doctor_31 from "./Doctor_31.png";
import Doctor_32 from "./Doctor_32.png";
import Doctor_33 from "./Doctor_33.png";
import Doctor_34 from "./Doctor_34.png";
import Doctor_35 from "./Doctor_35.png";
import Doctor_36 from "./Doctor_36.png";
import Doctor_37 from "./Doctor_37.png";
import Doctor_38 from "./Doctor_38.png";
import Doctor_39 from "./Doctor_39.png";
import Doctor_40 from "./Doctor_40.png";

import Dermatologist from "./Dermatologist.png";
import Gastroenterologist from "./Gastroenterologist.png";
import General_Physician from "./General_Physician.png";
import Gynecologist from "./Gynecologist.png";
import Neurologist from "./Neurologist.png";
import Pediatrician from "./Pediatrician.png";
import Cardiologist from "./Cardiologist.png";
import OrthopedicSurgeon from "./OrthopedicSurgeon.png";
import Dentist from "./Dentist.png";
import Psychiatrist from "./Psychiatrist.png";

export const assets = {
  Appointment_Image,
  Header_Image,
  Group_Profiles,
  Logo,
  Profile_Picture,
  Contact_Image,
  About_Image,
};

export const specialityData = [
  {
    speciality: "General Physician",
    image: General_Physician,
  },
  {
    speciality: "Gynecologist",
    image: Gynecologist,
  },
  {
    speciality: "Dermatologist",
    image: Dermatologist,
  },
  {
    speciality: "Pediatrician",
    image: Pediatrician,
  },
  {
    speciality: "Neurologist",
    image: Neurologist,
  },
  {
    speciality: "Gastroenterologist",
    image: Gastroenterologist,
  },
  {
    speciality: "Cardiologist",
    image: Cardiologist,
  },
  {
    speciality: "Orthopedic Surgeon",
    image: OrthopedicSurgeon,
  },
  {
    speciality: "Dentist",
    image: Dentist,
  },
  {
    speciality: "Psychiatrist",
    image: Psychiatrist,
  },
];

export const doctors = [
  {
    _id: "1",
    name: "Dr. Anjali Venkatesan",
    image: Doctor_1,
    gender: "female-tamil",
    speciality: "Pediatrician",
    degree: "MBBS",
    experience: "7 years",
    about:
      "Dr. Anjali Venkatesan is a dedicated pediatrician with experience in treating children of all ages.",
    fees: 1500,
    address: {
      line1:
        "No. 5, Kovil Lane, Main Street",
      line2: "Nallur, Jaffna, Northern Province, Sri Lanka",
    },
  },
  {
    _id: "2",
    name: "Dr. Pradeep Fernando",
    image: Doctor_2,
    gender: "male-sinhala",
    speciality: "Gastroenterologist",
    degree: "MD",
    experience: "10 years",
    about:
      "Dr. Pradeep Fernando specializes in digestive system disorders, providing expert care in gastrointestinal issues.",
    fees: 1800,
    address: {
      line1: "No. 7, Galle Road, Colombo, Western Province, Sri Lanka",
      line2: "Colombo, Western Province, Sri Lanka",
    },
  },
  {
    _id: "3",
    name: "Dr. Malini Rajasingham",
    image: Doctor_3,
    gender: "female-tamil",
    speciality: "Gynecologist",
    degree: "MD",
    experience: "12 years",
    about:
      "Dr. Malini Rajasingham is a trusted gynecologist, offering expert care in women's health.",
    fees: 2200,
    address: {
      line1: "No. 14, Palali Road, Jaffna, Northern Province, Sri Lanka",
      line2: "Jaffna, Northern Province, Sri Lanka",
    },
  },
  {
    _id: "4",
    name: "Dr. Rohan Silva",
    image: Doctor_4,
    gender: "male-sinhala",
    speciality: "Cardiologist",
    degree: "MBBS, MD",
    experience: "15 years",
    about:
      "Dr. Rohan Silva specializes in heart-related conditions and provides comprehensive cardiovascular care.",
    fees: 2500,
    address: {
      line1: "No. 10, Lake Drive, Kandy, Central Province, Sri Lanka",
      line2: "Kandy, Central Province, Sri Lanka",
    },
  },
  {
    _id: "5",
    name: "Dr. Shankar Pillai",
    image: Doctor_5,
    gender: "male-tamil",
    speciality: "Neurologist",
    degree: "MD",
    experience: "8 years",
    about:
      "Dr. Shankar Pillai is an expert in treating neurological disorders, providing personalized treatment plans.",
    fees: 2000,
    address: {
      line1: "No. 3, Temple Road, Batticaloa, Eastern Province, Sri Lanka",
      line2: "Batticaloa, Eastern Province, Sri Lanka",
    },
  },
  {
    _id: "6",
    name: "Dr. Nadeesha Perera",
    image: Doctor_6,
    gender: "female-sinhala",
    speciality: "General Physician",
    degree: "MBBS",
    experience: "6 years",
    about:
      "Dr. Nadeesha Perera offers specialized care in skin conditions, from acne to eczema.",
    fees: 1700,
    address: {
      line1: "No. 22, Wewala Road, Galle, Southern Province, Sri Lanka",
      line2: "Galle, Southern Province, Sri Lanka",
    },
  },
  {
    _id: "7",
    name: "Dr. Kanchana Arachchige",
    image: Doctor_7,
    gender: "female-sinhala",
    speciality: "Dermatologist",
    degree: "MD",
    experience: "9 years",
    about:
      "Dr. Kanchana Arachchige is a dermatologist specializing in cosmetic dermatology.",
    fees: 2100,
    address: {
      line1: "No. 18, Kingsbury Road, Colombo, Western Province, Sri Lanka",
      line2: "Colombo, Western Province, Sri Lanka",
    },
  },
  {
    _id: "8",
    name: "Dr. Rajeshwaran Jeyaraj",
    image: Doctor_8,
    gender: "male-tamil",
    speciality: "Orthopedic Surgeon",
    degree: "MBBS",
    experience: "10 years",
    about:
      "Dr. Rajeshwaran Jeyaraj specializes in treating bone fractures and joint issues.",
    fees: 2600,
    address: {
      line1: "No. 13, Kovil Road, Trincomalee, Eastern Province, Sri Lanka",
      line2: "Trincomalee, Eastern Province, Sri Lanka",
    },
  },
  {
    _id: "9",
    name: "Dr. Dharmendra Jayasinghe",
    image: Doctor_9,
    gender: "male-sinhala",
    speciality: "Pediatrician",
    degree: "MBBS",
    experience: "5 years",
    about:
      "Dr. Dharmendra Jayasinghe specializes in the care of newborns and children.",
    fees: 1400,
    address: {
      line1: "No. 11, Chapel Road, Kandy, Central Province, Sri Lanka",
      line2: "Kandy, Central Province, Sri Lanka",
    },
  },
  {
    _id: "10",
    name: "Dr. Roshani Seneviratne",
    image: Doctor_10,
    gender: "female-sinhala",
    speciality: "Cardiologist",
    degree: "MD",
    experience: "14 years",
    about:
      "Dr. Roshani Seneviratne is a leading cardiologist with expertise in heart disease prevention.",
    fees: 2500,
    address: {
      line1: "No. 6, Sunflower Road, Colombo, Western Province, Sri Lanka",
      line2: "Colombo, Western Province, Sri Lanka",
    },
  },
  {
    _id: "11",
    name: "Dr. Sanjana Thirukumaran",
    image: Doctor_11,
    gender: "female-tamil",
    speciality: "Dentist",
    degree: "BDS",
    experience: "8 years",
    about:
      "Dr. Sanjana Thirukumaran offers comprehensive dental care including cleanings, fillings, and cosmetic dentistry.",
    fees: 1800,
    address: {
      line1:
        "No. 21, Railway Station Road, Kilinochchi, Northern Province, Sri Lanka",
      line2: "Kilinochchi, Northern Province, Sri Lanka",
    },
  },
  {
    _id: "12",
    name: "Dr. Ashoka Dissanayake",
    image: Doctor_12,
    gender: "male-sinhala",
    speciality: "Dermatologist",
    degree: "MBBS",
    experience: "6 years",
    about:
      "Dr. Ashoka Dissanayake is an expert in treating various skin conditions.",
    fees: 2000,
    address: {
      line1: "No. 16, Galle Road, Matara, Southern Province, Sri Lanka",
      line2: "Matara, Southern Province, Sri Lanka",
    },
  },
  {
    _id: "13",
    name: "Dr. Nirmala Arunachalam",
    image: Doctor_13,
    gender: "female-tamil",
    speciality: "Gastroenterologist",
    degree: "MD",
    experience: "10 years",
    about:
      "Dr. Nirmala Arunachalam specializes in digestive diseases, offering treatments for a variety of gastrointestinal disorders.",
    fees: 1900,
    address: {
      line1: "No. 3, Kandy Road, Batticaloa, Eastern Province, Sri Lanka",
      line2: "Batticaloa, Eastern Province, Sri Lanka",
    },
  },
  {
    _id: "14",
    name: "Dr. Kamalika Fernando",
    image: Doctor_14,
    gender: "female-sinhala",
    speciality: "Gynecologist",
    degree: "MD",
    experience: "13 years",
    about:
      "Dr. Kamalika Fernando is a highly experienced gynecologist focusing on reproductive health.",
    fees: 2200,
    address: {
      line1: "No. 8, Kurunegala Road, Kandy, Central Province, Sri Lanka",
      line2: "Kandy, Central Province, Sri Lanka",
    },
  },
  {
    _id: "15",
    name: "Dr. Nalin Perera",
    image: Doctor_15,
    gender: "male-sinhala",
    speciality: "Dentist",
    degree: "BDS",
    experience: "9 years",
    about:
      "Dr. Nalin Perera offers advanced dental treatments, from general checkups to cosmetic procedures.",
    fees: 1600,
    address: {
      line1: "No. 5, Galle Road, Colombo, Western Province, Sri Lanka",
      line2: "Colombo, Western Province, Sri Lanka",
    },
  },
  {
    _id: "16",
    name: "Dr. Amara Rajasingham",
    image: Doctor_16,
    gender: "female-tamil",
    speciality: "Psychiatrist",
    degree: "MD",
    experience: "12 years",
    about:
      "Dr. Amara Rajasingham offers counseling and psychiatric services for mental health disorders.",
    fees: 2300,
    address: {
      line1: "No. 7, Main Street, Jaffna, Northern Province, Sri Lanka",
      line2: "Jaffna, Northern Province, Sri Lanka",
    },
  },
  {
    _id: "17",
    name: "Dr. Prasanna Wickramasinghe",
    image: Doctor_17,
    gender: "male-sinhala",
    speciality: "General Physician",
    degree: "MBBS",
    experience: "10 years",
    about:
      "Dr. Prasanna Wickramasinghe provides primary health care, managing general health issues and chronic diseases.",
    fees: 1500,
    address: {
      line1: "No. 14, Galle Road, Colombo, Western Province, Sri Lanka",
      line2: "Colombo, Western Province, Sri Lanka",
    },
  },
  {
    _id: "18",
    name: "Dr. Sangeetha Shanmugam",
    image: Doctor_18,
    gender: "female-tamil",
    speciality: "Neurologist",
    degree: "MD",
    experience: "9 years",
    about:
      "Dr. Sangeetha Shanmugam specializes in neurological diseases, providing innovative treatment methods.",
    fees: 2200,
    address: {
      line1: "No. 4, Jaffna Road, Kilinochchi, Northern Province, Sri Lanka",
      line2: "Kilinochchi, Northern Province, Sri Lanka",
    },
  },
  {
    _id: "19",
    name: "Dr. Bimal Perera",
    image: Doctor_19,
    gender: "male-sinhala",
    speciality: "Gynecologist",
    degree: "MD",
    experience: "11 years",
    about:
      "Dr. Bimal Perera offers expert care for women's reproductive health, including treatments for gynecological disorders.",
    fees: 2400,
    address: {
      line1: "No. 11, Kandy Road, Galle, Southern Province, Sri Lanka",
      line2: "Galle, Southern Province, Sri Lanka",
    },
  },
  {
    _id: "20",
    name: "Dr. Keerthika Sathasivam",
    image: Doctor_20,
    gender: "female-tamil",
    speciality: "Pediatrician",
    degree: "MBBS",
    experience: "6 years",
    about:
      "Dr. Keerthika Sathasivam specializes in children's health care, from newborn care to adolescent health.",
    fees: 1600,
    address: {
      line1: "No. 5, Trincomalee Road, Jaffna, Northern Province, Sri Lanka",
      line2: "Jaffna, Northern Province, Sri Lanka",
    },
  },
  {
    _id: "21",
    name: "Dr. Kanishka Samarasinghe",
    image: Doctor_21,
    gender: "male-sinhala",
    speciality: "Neurologist",
    degree: "MD",
    experience: "8 years",
    about:
      "Dr. Kanishka Samarasinghe is an expert in treating neurological disorders including seizures and strokes.",
    fees: 2100,
    address: {
      line1: "No. 3, Galle Road, Kandy, Central Province, Sri Lanka",
      line2: "Kandy, Central Province, Sri Lanka",
    },
  },
  {
    _id: "22",
    name: "Dr. Niranjala Rajendran",
    image: Doctor_22,
    gender: "female-tamil",
    speciality: "Orthopedic Surgeon",
    degree: "MBBS",
    experience: "7 years",
    about:
      "Dr. Niranjala Rajendran is a skilled orthopedic surgeon specializing in bone fractures and sports injuries.",
    fees: 2400,
    address: {
      line1: "No. 4, Chunnakam Road, Jaffna, Northern Province, Sri Lanka",
      line2: "Jaffna, Northern Province, Sri Lanka",
    },
  },
  {
    _id: "23",
    name: "Dr. Chatura De Silva",
    image: Doctor_23,
    gender: "male-sinhala",
    speciality: "Psychiatrist",
    degree: "MD",
    experience: "14 years",
    about:
      "Dr. Chatura De Silva specializes in treating patients with depression, anxiety, and other mental health conditions.",
    fees: 2200,
    address: {
      line1: "No. 7, Colombo Road, Kandy, Central Province, Sri Lanka",
      line2: "Kandy, Central Province, Sri Lanka",
    },
  },
  {
    _id: "24",
    name: "Dr. Suba Sundaram",
    image: Doctor_24,
    gender: "female-tamil",
    speciality: "Gastroenterologist",
    degree: "MD",
    experience: "10 years",
    about:
      "Dr. Suba Sundaram is an expert in treating gastrointestinal disorders, offering both medical and surgical options.",
    fees: 2000,
    address: {
      line1: "No. 9, Sea View Road, Trincomalee, Eastern Province, Sri Lanka",
      line2: "Trincomalee, Eastern Province, Sri Lanka",
    },
  },
  {
    _id: "25",
    name: "Dr. Nishanthi Gunawardena",
    image: Doctor_25,
    gender: "female-sinhala",
    speciality: "Dermatologist",
    degree: "MBBS",
    experience: "8 years",
    about:
      "Dr. Nishanthi Gunawardena treats a variety of skin conditions, specializing in acne and eczema treatments.",
    fees: 1700,
    address: {
      line1: "No. 19, Lake Road, Colombo, Western Province, Sri Lanka",
      line2: "Colombo, Western Province, Sri Lanka",
    },
  },
  {
    _id: "26",
    name: "Dr. Maheshwaran Karunakaran",
    image: Doctor_26,
    gender: "male-tamil",
    speciality: "Dentist",
    degree: "BDS",
    experience: "9 years",
    about:
      "Dr. Maheshwaran Karunakaran is a well-known dentist specializing in orthodontics and dental implants.",
    fees: 1800,
    address: {
      line1: "No. 2, Manipay Road, Jaffna, Northern Province, Sri Lanka",
      line2: "Jaffna, Northern Province, Sri Lanka",
    },
  },
  {
    _id: "27",
    name: "Dr. Chamari Liyanage",
    image: Doctor_27,
    gender: "female-sinhala",
    speciality: "Cardiologist",
    degree: "MD",
    experience: "13 years",
    about:
      "Dr. Chamari Liyanage specializes in diagnosing and treating heart conditions, including hypertension and cholesterol issues.",
    fees: 2500,
    address: {
      line1: "No. 10, Main Street, Kandy, Central Province, Sri Lanka",
      line2: "Kandy, Central Province, Sri Lanka",
    },
  },
  {
    _id: "28",
    name: "Dr. Indra Venkatesh",
    image: Doctor_28,
    gender: "female-tamil",
    speciality: "General Physician",
    degree: "MBBS",
    experience: "11 years",
    about:
      "Dr. Indra Venkatesh is a versatile general physician with expertise in a wide range of medical conditions.",
    fees: 1800,
    address: {
      line1: "No. 5, Nallur Road, Jaffna, Northern Province, Sri Lanka",
      line2: "Jaffna, Northern Province, Sri Lanka",
    },
  },
  {
    _id: "29",
    name: "Dr. Ravi Shankar",
    image: Doctor_29,
    gender: "male-sinhala",
    speciality: "Psychiatrist",
    degree: "MD",
    experience: "10 years",
    about:
      "Dr. Ravi Shankar treats patients suffering from various mental health issues like schizophrenia and bipolar disorder.",
    fees: 2300,
    address: {
      line1: "No. 2, Galle Road, Matara, Southern Province, Sri Lanka",
      line2: "Matara, Southern Province, Sri Lanka",
    },
  },
  {
    _id: "30",
    name: "Dr. Nadeesha Perera",
    image: Doctor_30,
    gender: "female-sinhala",
    speciality: "Gynecologist",
    degree: "MD",
    experience: "8 years",
    about:
      "Dr. Nadeesha Perera specializes in reproductive health and provides care for gynecological issues.",
    fees: 2100,
    address: {
      line1: "No. 16, Colombo Road, Kandy, Central Province, Sri Lanka",
      line2: "Kandy, Central Province, Sri Lanka",
    },
  },
  {
    _id: "31",
    name: "Dr. Aravindan Thavapalan",
    image: Doctor_31,
    gender: "male-tamil",
    speciality: "Neurologist",
    degree: "MD",
    experience: "10 years",
    about:
      "Dr. Aravindan Thavapalan is a neurologist specializing in treating disorders such as epilepsy and strokes.",
    fees: 2300,
    address: {
      line1: "No. 7, Mannar Road, Jaffna, Northern Province, Sri Lanka",
      line2: "Jaffna, Northern Province, Sri Lanka",
    },
  },
  {
    _id: "32",
    name: "Dr. Kusalika Perera",
    image: Doctor_32,
    gender: "female-sinhala",
    speciality: "Cardiologist",
    degree: "MBBS, MD",
    experience: "15 years",
    about:
      "Dr. Kusalika Perera is a leading cardiologist specializing in heart disease management.",
    fees: 2600,
    address: {
      line1: "No. 8, Kelaniya Road, Colombo, Western Province, Sri Lanka",
      line2: "Colombo, Western Province, Sri Lanka",
    },
  },
  {
    _id: "33",
    name: "Dr. Chamari Perera",
    image: Doctor_33,
    gender: "female-sinhala",
    speciality: "General Physician",
    degree: "MBBS",
    experience: "12 years",
    about:
      "Dr. Chamari Perera offers general health services and preventative care for chronic conditions.",
    fees: 1900,
    address: {
      line1: "No. 4, Galle Road, Matara, Southern Province, Sri Lanka",
      line2: "Matara, Southern Province, Sri Lanka",
    },
  },
  {
    _id: "34",
    name: "Dr. Aravindan Rajendran",
    image: Doctor_34,
    gender: "male-tamil",
    speciality: "Dermatologist",
    degree: "MBBS",
    experience: "7 years",
    about:
      "Dr. Aravindan Rajendran specializes in treating a wide range of skin issues from acne to skin cancers.",
    fees: 2100,
    address: {
      line1: "No. 9, Palali Road, Jaffna, Northern Province, Sri Lanka",
      line2: "Jaffna, Northern Province, Sri Lanka",
    },
  },
  {
    _id: "35",
    name: "Dr. Sundar Kumar",
    image: Doctor_35,
    gender: "male-tamil",
    speciality: "Orthopedic Surgeon",
    degree: "MD",
    experience: "13 years",
    about:
      "Dr. Sundar Kumar specializes in orthopedics, including joint replacements and sports injuries.",
    fees: 2500,
    address: {
      line1:
        "No. 14, Jaffna Road, Chavakachcheri, Northern Province, Sri Lanka",
      line2: "Chavakachcheri, Northern Province, Sri Lanka",
    },
  },
  {
    _id: "36",
    name: "Dr. Ruvini Wickramasinghe",
    image: Doctor_36,
    gender: "female-sinhala",
    speciality: "Gastroenterologist",
    degree: "MD",
    experience: "11 years",
    about:
      "Dr. Ruvini Wickramasinghe offers expert treatment for gastrointestinal issues and digestive disorders.",
    fees: 2200,
    address: {
      line1: "No. 7, Kandy Road, Colombo, Western Province, Sri Lanka",
      line2: "Colombo, Western Province, Sri Lanka",
    },
  },
  {
    _id: "37",
    name: "Dr. Kumaran Sathiyamoorthy",
    image: Doctor_37,
    gender: "male-tamil",
    speciality: "Pediatrician",
    degree: "MBBS",
    experience: "9 years",
    about:
      "Dr. Kumaran Sathiyamoorthy specializes in pediatric care, particularly in immunization and child health.",
    fees: 1600,
    address: {
      line1: "No. 3, Kandy Road, Nallur, Jaffna, Northern Province, Sri Lanka",
      line2: "Nallur, Jaffna, Northern Province, Sri Lanka",
    },
  },
  {
    _id: "38",
    name: "Dr. Dineshkanth Arulraj",
    image: Doctor_38,
    gender: "male-tamil",
    speciality: "Dentist",
    degree: "BDS",
    experience: "8 years",
    about:
      "Dr. Dineshkanth Arulraj offers general and cosmetic dental care for all age groups.",
    fees: 1800,
    address: {
      line1: "No. 15, Kayts Road, Jaffna, Northern Province, Sri Lanka",
      line2: "Jaffna, Northern Province, Sri Lanka",
    },
  },
  {
    _id: "39",
    name: "Dr. Vijayalakshmi Kumaran",
    image: Doctor_39,
    gender: "male-tamil",
    speciality: "Psychiatrist",
    degree: "MD",
    experience: "10 years",
    about:
      "Dr. Vijayalakshmi Kumaran treats mental health disorders with psychotherapy and medication.",
    fees: 2400,
    address: {
      line1: "No. 12, Kokuvil Road, Jaffna, Northern Province, Sri Lanka",
      line2: "Jaffna, Northern Province, Sri Lanka",
    },
  },
  {
    _id: "40",
    name: "Dr. Manikandan Ramasamy",
    image: Doctor_40,
    gender: "male-tamil",
    speciality: "Orthopedic Surgeon",
    degree: "MBBS",
    experience: "12 years",
    about:
      "Dr. Manikandan Ramasamy specializes in bone fractures, spinal injuries, and joint replacements.",
    fees: 2700,
    address: {
      line1:
        "No. 21, Chavakachcheri Road, Jaffna, Northern Province, Sri Lanka",
      line2: "Jaffna, Northern Province, Sri Lanka",
    },
  },
];
