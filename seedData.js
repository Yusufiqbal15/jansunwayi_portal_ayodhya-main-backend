const mongoose = require('mongoose');
require('dotenv').config();

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected for seeding'))
.catch((err) => console.error('MongoDB connection error:', err));

// Department Schema
const departmentSchema = new mongoose.Schema({
  id: Number,
  name_en: String,
  name_hi: String,
  createdAt: { type: Date, default: Date.now }
});

// SubDepartment Schema
const subDepartmentSchema = new mongoose.Schema({
  departmentId: Number,
  name_en: String,
  name_hi: String,
  createdAt: { type: Date, default: Date.now }
});

const Department = mongoose.model('Department', departmentSchema);
const SubDepartment = mongoose.model('SubDepartment', subDepartmentSchema);

// Department data
const departments = [
  { id: 1, name_en: "Administration Department", name_hi: "प्रशासन विभाग" },
  { id: 2, name_en: "Development department", name_hi: "विकास विभाग" },
  { id: 3, name_en: "District Panchayat Department", name_hi: "जिला पंचायत विभाग" },
  { id: 4, name_en: "District Social Welfare Department", name_hi: "जिला समाज कल्याण विभाग" },
  { id: 5, name_en: "Animal Husbandry Department", name_hi: "पशुपालन विभाग" },
  { id: 6, name_en: "District Industries Department", name_hi: "जिला उद्योग विभाग" },
  { id: 7, name_en: "District Education Department", name_hi: "जिला शिक्षा विभाग" },
  { id: 8, name_en: "District Health Department", name_hi: "जिला स्वास्थ्य विभाग" },
  { id: 9, name_en: "District Agriculture Department", name_hi: "जिला कृषि विभाग" },
  { id: 10, name_en: "District Forest Department", name_hi: "जिला वन विभाग" },
  { id: 11, name_en: "District Program Department", name_hi: "जिला कार्यक्रम विभाग" },
  { id: 12, name_en: "District Food and Marketing Department", name_hi: "जिला खाद्य एवं विपणन विभाग" },
  { id: 13, name_en: "District Food Logistics Department", name_hi: "जिला खाद्य रसद विभाग" },
  { id: 14, name_en: "Agriculture Department", name_hi: "कृषि विभाग" },
  { id: 15, name_en: "Sugarcan Department", name_hi: "गन्ना विभाग" },
  { id: 16, name_en: "Agricultural Production Market Committee", name_hi: "कृषि उत्पादन मंडी समिति" },
  { id: 17, name_en: "labor department", name_hi: "श्रम विभाग" },
  { id: 18, name_en: "Excise Department", name_hi: "आबकारी विभाग" },
  { id: 19, name_en: "irrigation department", name_hi: "सिंचाई विभाग" },
  { id: 20, name_en: "Public Works Department, Provincial Division", name_hi: "लोक निर्माण विभाग, प्रान्तीय खण्ड" },
  { id: 21, name_en: "Public Works Department Construction Division-02", name_hi: "लोक निर्माण विभाग निर्माण खण्ड-02" },
  { id: 22, name_en: "Public Works Department Construction Division-03", name_hi: "लोक निर्माण विभाग निर्माण खण्ड-03" },
  { id: 23, name_en: "Public Works Department Division-04", name_hi: "लोक निर्माण विभाग खण्ड-04" },
  { id: 24, name_en: "Public Works Department NH (National Highway) Division", name_hi: "लोक निर्माण विभाग एन0एच0 खण्ड" },
  { id: 25, name_en: "Rural Engineering Department (R.E.D.)", name_hi: "ग्रामीण अभियंत्रण विभाग (आर०ई०डी०)" },
  { id: 26, name_en: "Saryu Canal Division", name_hi: "सरयू नहर खण्ड" },
  { id: 27, name_en: "Flood Works Division", name_hi: "बाढ़ कार्य खण्ड" },
  { id: 28, name_en: "Groundwater Department", name_hi: "भूगर्भ जल विभाग" },
  { id: 29, name_en: "Lift Irrigation Division", name_hi: "लिफ्ट सिंचाई खण्ड" },
  { id: 30, name_en: "Tubewell Construction Division", name_hi: "नलकूप निर्माण खण्ड" },
  { id: 31, name_en: "U.P. Jal Nigam Urban Construction Division", name_hi: "उ0 प्र0 जल निगम नगरीय निर्माण खण्ड" },
  { id: 32, name_en: "Minor Irrigation Division Ayodhya", name_hi: "लघु सिंचाई खण्ड अयोध्या" },
  { id: 33, name_en: "Electricity Department", name_hi: "विद्युत विभाग" },
  { id: 34, name_en: "ITI Department", name_hi: "आई0टी0आई0 विभाग" },
  { id: 35, name_en: "State Tax Department", name_hi: "राज्य कर विभाग" },
  { id: 36, name_en: "Police Department", name_hi: "पुलिस विभाग" },
  { id: 37, name_en: "Education Department", name_hi: "शिक्षा विभाग" },
  { id: 38, name_en: "Divisional Transport Department", name_hi: "सम्भागीय परिवहन विभाग " },
  { id: 39, name_en: "Uttar Pradesh State Road Transport Department", name_hi: "उ0 प्र0 राज्य सड़क परिवहन विभाग" },
  { id: 40, name_en: "Information Department", name_hi: "सूचना विभाग " },
  { id: 41, name_en: "Home Guards Department", name_hi: "होम गार्ड्स विभाग" },
  { id: 42, name_en: "Health Department", name_hi: "स्वास्थ्य विभाग" },
  { id: 43, name_en: "Stamp and Registration Department", name_hi: "स्टाम्प एवं रजिस्ट्रेशन विभाग" },
  { id: 44, name_en: "Ayodhya Development Authority Ayodhya", name_hi: "अयोध्या विकास प्राधिकरण अयोध्या" },
  { id: 45, name_en: "Public Works Department Electrical & Mechanical Section", name_hi: "लोक निर्माण विभाग विद्युत यांत्रिक खण्ड" },
  { id: 46, name_en: "Cooperative Department", name_hi: "सहकारिता विभाग" },
  { id: 47, name_en: "UPPCL U.P. Project Corporation Ltd. Construction Unit-11 Ayodhya", name_hi: "यूपीपीसीएल उ0 प्र0 प्रोजेक्ट कारपोरेशन लि0 निर्माण इकाई-11 अयोध्या।" },
  { id: 48, name_en: "Other Miscellaneous Departments", name_hi: "अन्य विविध विभाग" },
  { id: 49, name_en: "Nagar Nigam Ayodhya", name_hi: "नगर निगम अयोध्या" }
];

// Sub-departments for each department
const subDepartmentsData = {
  1: [ // Administration Department
    { name_en: "Chief Development Officer", name_hi: "मुख्य विकास अधिकारी" },
    { name_en: "Additional District Magistrate (Finance / Revenue) Ayodhya", name_hi: "अपर जिलाधिकारी (वित्त / राजस्व) अयोध्या" },
    { name_en: "Additional District Magistrate (City), Ayodhya", name_hi: "अपर जिलाधिकारी (नगर), अयोध्या" },
    { name_en: "Additional District Magistrate (Administration)", name_hi: "अपर जिलाधिकारी (प्रशासन)" },
    { name_en: "Chief Revenue Officer", name_hi: "मुख्य राजस्व अधिकारी" },
    { name_en: "Additional District Magistrate (Law & Order)", name_hi: "अपर जिलाधिकारी (कानून एवं व्यवस्था)" },
    { name_en: "Additional District Magistrate (Land Acquisition)", name_hi: "अपर जिलाधिकारी (भू-अर्जन)" },
    { name_en: "City Magistrate", name_hi: "नगर मजिस्ट्रेट" },
    { name_en: "Resident Magistrate", name_hi: "रेजीडेन्ट मजिस्ट्रेट" },
    { name_en: "Deputy Divisional Consolidation", name_hi: "उप संभागीय चकबन्दी" },
    { name_en: "Sub Divisional Magistrate Sadar", name_hi: "उप जिलाधिकारी सदर" },
    { name_en: "Sub-District Magistrate, Bikapur", name_hi: "उप-जिला मजिस्ट्रेट, बिकापुर" },
    { name_en: "Sub-District Magistrate, Rudauli", name_hi: "उप-जिला मजिस्ट्रेट, रुदौली" },
    { name_en: "Sub-District Magistrate, Milkipur", name_hi: "उप-जिला मजिस्ट्रेट, मिल्कीपुर" },
    { name_en: "Sub-District Magistrate, Sohawal", name_hi: "उप-जिला मजिस्ट्रेट, सोहावल" },
    { name_en: "Assistant Record Officer", name_hi: "सहायक रिकॉर्ड अधिकारी" },
    { name_en: "Tehsildar Sadar", name_hi: "तहसीलदार सदर" },
    { name_en: "Tehsildar Bikapur", name_hi: "तहसीलदार बिकापुर" },
    { name_en: "Tehsildar Rudauli", name_hi: "तहसीलदार रुदौली" },
    { name_en: "Tehsildar Milkipur", name_hi: "तहसीलदार मिल्कीपुर" },
    { name_en: "Tehsildar Sohawal", name_hi: "तहसीलदार सोहावल" },
    { name_en: "Shri Raj Bahadur Verma, Nayab Tehsildar (Survey)", name_hi: "श्री राज बहादुर वर्मा, नायब तहसीलदार (सर्वेक्षण)" },
    { name_en: "Shri Ravindra Nath Upadhyay, Nayab Tehsildar (Nazul)", name_hi: "श्री रविंद्र नाथ उपाध्याय, नायब तहसीलदार (नजूल)" }
  ],
  2: [ // Development department
    { name_en: "Development Officer", name_hi: "विकास अधिकारी" },
    { name_en: "Assistant Development Officer", name_hi: "सहायक विकास अधिकारी" },
    { name_en: "Block Development Officer", name_hi: "खंड विकास अधिकारी" }
  ],
  3: [ // District Panchayat Department
    { name_en: "District Panchayat Officer", name_hi: "जिला पंचायत अधिकारी" },
    { name_en: "Assistant District Panchayat Officer", name_hi: "सहायक जिला पंचायत अधिकारी" }
  ],
  4: [ // District Social Welfare Department
    { name_en: "District Social Welfare Officer", name_hi: "जिला समाज कल्याण अधिकारी" },
    { name_en: "Assistant Social Welfare Officer", name_hi: "सहायक समाज कल्याण अधिकारी" }
  ],
  5: [ // Animal Husbandry Department
    { name_en: "Chief Veterinary Officer", name_hi: "मुख्य पशु चिकित्सा अधिकारी" },
    { name_en: "District Veterinary Officer", name_hi: "जिला पशु चिकित्सा अधिकारी" },
    { name_en: "Veterinary Assistant", name_hi: "पशु चिकित्सा सहायक" }
  ],
  6: [ // District Industries Department
    { name_en: "District Industries Officer", name_hi: "जिला उद्योग अधिकारी" },
    { name_en: "Assistant Industries Officer", name_hi: "सहायक उद्योग अधिकारी" }
  ],
  7: [ // District Education Department
    { name_en: "District Education Officer", name_hi: "जिला शिक्षा अधिकारी" },
    { name_en: "Assistant Education Officer", name_hi: "सहायक शिक्षा अधिकारी" },
    { name_en: "Block Education Officer", name_hi: "खंड शिक्षा अधिकारी" }
  ],
  8: [ // District Health Department
    { name_en: "Chief Medical Officer", name_hi: "मुख्य चिकित्सा अधिकारी" },
    { name_en: "District Health Officer", name_hi: "जिला स्वास्थ्य अधिकारी" },
    { name_en: "Medical Officer", name_hi: "चिकित्सा अधिकारी" }
  ],
  9: [ // District Agriculture Department
    { name_en: "District Agriculture Officer", name_hi: "जिला कृषि अधिकारी" },
    { name_en: "Assistant Agriculture Officer", name_hi: "सहायक कृषि अधिकारी" },
    { name_en: "Block Agriculture Officer", name_hi: "खंड कृषि अधिकारी" }
  ],
  10: [ // District Forest Department
    { name_en: "District Forest Officer", name_hi: "जिला वन अधिकारी" },
    { name_en: "Assistant Forest Officer", name_hi: "सहायक वन अधिकारी" },
    { name_en: "Range Forest Officer", name_hi: "रेंज वन अधिकारी" }
  ]
  // Add more departments as needed...
};

async function seedDatabase() {
  try {
    console.log('Starting database seeding...');
    
    // Drop existing collections to avoid conflicts
    await mongoose.connection.dropDatabase();
    console.log('Dropped existing database');
    
    // Insert departments
    await Department.insertMany(departments);
    console.log(`Inserted ${departments.length} departments`);
    
    // Insert sub-departments
    const subDepartmentsToInsert = [];
    for (const [deptId, subDepts] of Object.entries(subDepartmentsData)) {
      for (const subDept of subDepts) {
        subDepartmentsToInsert.push({
          departmentId: parseInt(deptId),
          name_en: subDept.name_en,
          name_hi: subDept.name_hi
        });
      }
    }
    
    await SubDepartment.insertMany(subDepartmentsToInsert);
    console.log(`Inserted ${subDepartmentsToInsert.length} sub-departments`);
    
    console.log('Database seeding completed successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase(); 