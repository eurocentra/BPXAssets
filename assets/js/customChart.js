//JavaScript

OrgChart.templates.myTemplate = Object.assign({}, OrgChart.templates.ana);
OrgChart.templates.myTemplate.size = [125, 190];
OrgChart.templates.myTemplate.node = '<rect x="0" y="0" height="190" width="125" fill="#ffffff" stroke-width="1" stroke="#aeaeae" rx="5" ry="5"></rect>';
OrgChart.templates.myTemplate.field_0 = '<text data-width="100" data-text-overflow="multiline" style="font-size: 15px;font-weight: bold;" fill="#2D2D2D" x="62.5" y="85" text-anchor="middle">{val}</text>';
OrgChart.templates.myTemplate.field_1 = '<text data-width="110" data-text-overflow="multiline"  style="font-size: 12px;" fill="#2D2D2D" x="62.5" y="125" text-anchor="middle">{val}</text>';
OrgChart.templates.myTemplate.img_0 = '<image preserveAspectRatio="xMidYMid slice" clip-path="url(#{randId})" xlink:href="{val}" x="32.5" y="7"  width="60" height="60"></image>';
OrgChart.templates.myTemplate.plus = '<circle cx="15" cy="15" r="15" fill="#212529" stroke="#ffffff" stroke-width="1"></circle>'
    + '<line x1="4" y1="15" x2="26" y2="15" stroke-width="1" stroke="#ffffff"></line>'
    + '<line x1="15" y1="4" x2="15" y2="26" stroke-width="1" stroke="#ffffff"></line>';
OrgChart.templates.myTemplate.minus = '<circle cx="15" cy="15" r="15" fill="#212529" stroke="#ffffff" stroke-width="1"></circle>'
    + '<line x1="4" y1="15" x2="26" y2="15" stroke-width="1" stroke="#ffffff"></line>';



var editForm = function () {
    this.nodeId = null;
};

editForm.prototype.init = function (obj) {
    var that = this;
    this.obj = obj;
    this.editForm = document.getElementById("editForm");
    this.emailInput = document.getElementById("email");
    this.addressInput = document.getElementById("address");
    this.phone1Input = document.getElementById("phone1");
    this.phone2Input = document.getElementById("phone2");
    this.imgInput = document.getElementById("img");
    this.nameInput = document.getElementById("name");
    this.titleInput = document.getElementById("title");
    this.cancelButton = document.getElementById("close");

    this.cancelButton.addEventListener("click", function () {
        that.hide();
    });
};

editForm.prototype.show = function (nodeId) {
    this.nodeId = nodeId;

    var left = document.body.offsetWidth / 2 - 150;

    this.editForm.style.left = left + "px";
    var node = chart.get(nodeId);
    if (!node) return;
    this.emailInput.innerHTML = node.email ? node.email : "";
    this.imgInput.src = node.img ? node.img : "#";
    this.nameInput.innerHTML = node.name ? node.name : "";
    this.titleInput.innerHTML = node.title ? node.title : "";

    this.editForm.style.display = "block";

    OrgChart.animate(this.editForm, { opacity: 0 }, { opacity: 1 }, 300, OrgChart.anim.inOutSin);
};

editForm.prototype.content = function (id, detailsMode, dontAnim, width, dontRenderButtons) {
    var div = document.createElement('div');
    div.innerHTML = document.getElementById('editForm').innerHTML;
    div.innerHTML += '<style>#close{display:none !important;}</style>';
    return { element: div, focusId: '', title: '', shareText: '' };
};

editForm.prototype.hide = function (showldUpdateTheNode) {
    this.editForm.style.display = "none";
    this.editForm.style.opacity = 0;

};

var chart = new OrgChart(document.getElementById('tree'), {
    mouseScrool: OrgChart.none,
    toolbar: {
        zoom: true,
    },
    enableSearch: false,
    template: "myTemplate",
    nodeBinding: {
        field_0: "name",
        field_1: 'title',
        img_0: "img"
    },
    editUI: new editForm(),
});



chart.load([
    {
      name: 'Kaschif R. Israr',
      id: 'Country Head',
      title: 'Country Head',
      img: './assets/images/Color/1.png',
      email: 'Kaschif@eurocentra.com.pk'
    },
    {
      name: 'Holger Fischer',
      id: 'CCO',
      title: 'Chief Consulting Officer',
      img: './assets/images/Color/62.png',
      email: 'fischer@eurocentra.com.pk'
    },
    {
      name: 'Business Team',
      id: 'Business',
      pid: 'Country Head',
      title: '',
      img: './assets/images/business.png',
      email: '',
    },
    {
      name: 'Technical Team',
      id: 'Technical',
      pid: 'Country Head',
      title: '',
      img: './assets/images/tech.png',
      email: ''
    },
    {
      name: 'Services Team',
      id: 'Services',
      pid: 'Country Head',
      title: '',
      img: './assets/images/idea.png',
      email: ''
    },
    {
      name: 'Supply Chain',
      id: 'Supply',
      pid: 'Country Head',
      title: '',
      img: './assets/images/supply.png',
      email: ''
    },
    {
      name: 'Operational Support Group (OSG)',
      id: 'OSG',
      pid: 'Country Head',
      title: '',
      img: './assets/images/osg.png',
      email: ''
    },
    {
      name: 'Rana Sohaib Mustafa',
      id: 'Lead2',
      pid: 'Technical',
      title: 'Head of Product Development & Manufacturing',
      img: './assets/images/Color/2.png',
      email: 'Sohaib@eurocentra.com.pk'
    },
    {
      name: 'Zahid Sajjad',
      id: 'Zahid Sajjad',
      pid: 'Services',
      title: 'Head of Sustainability, Digital Innovation & Services',
      img: './assets/images/Color/zs.png',
      email: 'zahid@eurocentra.com.pk'
    },
    {
      name: 'Abdul Saboor',
      id: 'Lead4',
      pid: 'Supply',
      title: 'Head of Supply Chain',
      img: './assets/images/Color/4.png',
      email: 'abdul.saboor@eurocentra.com.pk'
    },
    {
      name: 'Madni Khan',
      id: 'Lead5',
      pid: 'OSG',
      title: 'Manager Finance & Corporate Governance',
      img: './assets/images/Color/5.png',
      email: 'Madni@eurocentra.com.pk'
    },
    {
      name: 'Umair Ahmed Siddiqui',
      id: 'Busemp1',
      pid: 'Business',
      title: 'Division Head Bonprix - Knits',
      img: './assets/images/Color/15.png',
      email: 'Umair@eurocentra.com.pk'
    },
    {
      name: 'Abdul Hafeez',
      id: 'Busemp2',
      pid: 'Business',
      title: 'Division Head Bonprix-Woven',
      img: './assets/images/Color/17.png',
      email: 'abdul.hafeez@eurocentra.com.pk'
    },
    {
      name: 'Muhammad Umar',
      id: 'Busemp3',
      pid: 'Business',
      title: 'Division Head - Bonprix / Limango',
      img: './assets/images/Color/16.png',
      email: 'Umer@eurocentra.com.pk'
    },
    {
      name: 'Kashif Younus',
      id: 'Busemp4',
      pid: 'Busemp1',
      title: 'Deputy Merchandising Manager',
      img: './assets/images/Color/21.png',
      email: 'Kashif.younus@eurocentra.com.pk'
    },
    {
      name: 'Syed Amir Abbas',
      id: 'Busemp5',
      pid: 'Busemp2',
      title: 'Deputy Merchandising Manager',
      img:
        './assets/images/Color/22.png',
      email: 'Aamir.abbas@eurocentra.com.pk'
    },
    {
      name: 'Product Development',
      id: 'PD',
      pid: 'Lead2',
      title: '',
      img: '',
      email: ''
    },
    {
      name: '3D Product Innovation',
      id: '3D',
      pid: 'Lead2',
      title: '',
      img: '',
      email: ''
    },
    {
      name: 'Quality Development',
      id: 'QD',
      pid: 'Lead2',
      title: '',
      img: '',
      email: ''
    },
    {
      name: 'Textile Testing',
      id: 'TT',
      pid: 'Lead2',
      title: '',
      img: '',
      email: ''
    },
    {
      name: 'WFP Audits',
      id: 'WFP',
      pid: 'Lead2',
      title: '',
      img: '',
      email: ''
    },
    {
      name: 'Khizar Hayat',
      id: 'Khizar Hayat',
      pid: 'PD',
      title: 'Technical Lead',
      img:
        './assets/images/Color/14.png',
      email: 'khizar@eurocentra.com.pk'
    },
    {
      name: 'Muhammad Zeeshan',
      id: 'Muhammad Zeeshan',
      pid: 'Khizar Hayat',
      title: 'Technical Lead',
      img: './assets/images/Color/26.png',
      email: 'M.zeeshan@eurocentra.com.pk'
    },
    {
      name: 'Muhammad Tahreem',
      id: 'Muhammad Tahreem',
      pid: 'Muhammad Zeeshan',
      title: 'Technical Lead',
      img: './assets/images/Color/23.png',
      email: 'tehreem@eurocentra.com.pk'
    },
    {
      name: 'Imran Amjad',
      id: 'Imran Amjad',
      pid: '3D',
      title: 'Team Lead 3D',
      img: './assets/images/Color/25.png',
      email: 'imran.amjad@eurocentra.com.pk'
    },
    {
      name: 'Muhammad Asim',
      id: 'Muhammad Asim',
      pid: 'QD',
      title: 'Regional Quality Head',
      img: './assets/images/Color/13.png',
      email: 'asim@eurocentra.com.pk'
    },
    {
      name: 'Muhammad Jamil',
      id: 'Muhammad Jamil',
      pid: 'Muhammad Asim',
      title: 'Quality Lead',
      img: './assets/images/Color/34.png',
      email: 'jamil-eurocentra@outlook.com'
    },
    {
      name: 'S M Faisal Iqbal',
      id: 'S M Faisal Iqbal',
      pid: 'Muhammad Jamil',
      title: 'Quality Lead',
      img: './assets/images/Color/35.png',
      email: 'mfaisal-eurocentra@outlook.com'
    },
    {
      name: 'Shahzad Ansari',
      id: 'Shahzad Ansari',
      pid: 'S M Faisal Iqbal',
      title: 'Quality Lead',
      img: './assets/images/Color/32.png',
      email: 'shahzad-eurocentra@outlook.com'
    },
    {
      name: 'Dania Jamil',
      id: 'Dania Jamil',
      pid: 'TT',
      title: 'Testing Manager',
      img: './assets/images/Color/31.png',
      email: 'dania@eurocentra.com.pk'
    },
    {
      name: 'Muhammad Owais',
      id: 'Muhammad Owais',
      pid: 'Dania Jamil',
      title: 'Laboratory Incharge',
      img: './assets/images/Color/59.png',
      email: 'owais@eurocentra.com.pk'
    },
    {
      name: 'Ismail Khan',
      id: 'Ismail Khan',
      pid: 'WFP',
      title: 'Manager, Chemical Management',
      img: './assets/images/Color/27.png',
      email: 'ismail@eurocentra.com.pk'
    },
    {
      name: 'Digitalization Asset Management',
      id: 'DAM',
      pid: 'Zahid Sajjad',
      title: '',
      img: '',
      email: ''
    },
    {
      name: 'Sustainability & CSR',
      id: 'CSR',
      pid: 'Zahid Sajjad',
      title: '',
      img: '',
      email: ''
    },
    {
      name: 'Logistics',
      id: 'Logistics',
      pid: 'Zahid Sajjad',
      title: '',
      img: '',
      email: ''
    },
    {
      name: 'Product Library',
      id: 'PL',
      pid: 'Zahid Sajjad',
      title: '',
      img: '',
      email: ''
    },
    {
      name: 'Human Asset Management',
      id: 'HAM',
      pid: 'Zahid Sajjad',
      title: '',
      img: '',
      email: ''
    },
    {
      name: 'Muhammad Aamir',
      id: 'Muhammad Aamir',
      pid: 'DAM',
      title: 'MIS Manager',
      img: './assets/images/Color/9.png',
      email: 'aamir@eurocentra.com.pk'
    },
    {
      name: 'Sadad Ali',
      id: 'Sadad Ali',
      pid: 'Muhammad Aamir',
      title: 'MIS Executive',
      img: './assets/images/Color/19.png',
      email: 'sadad@eurocentra.com.pk'
    },
    {
      name: 'Muhammad Noman',
      id: 'Muhammad Noman',
      pid: 'Sadad Ali',
      title: 'Excellence Manager',
      img: './assets/images/Color/8.png',
      email: 'Noman@eurocentra.com.pk'
    },
    {
  
      id: 'Ahmed Adeel',
      pid: 'CSR',
      name: 'Ahmed Adeel',
      title: 'Sustainability Manager',
      img: './assets/images/Color/11.png',
      email: 'ahmed.adeel@eurocentra.com.pk'
    },
    {
  
      id: 'Basit Ali',
  
      pid: 'Ahmed Adeel',
      name: 'Basit Ali',
      title: 'CSR Executive',
      img: './assets/images/Color/18.png',
      email: 'Basit.ali@eurocentra.com.pk'
    },
    {
  
      id: 'Jameel Ahmed',
      name: 'Jameel Ahmed',
      pid: 'Basit Ali',
      title: 'Project Manager',
      img: './assets/images/Color/10.png',
      email: 'Jameel@eurocentra.com.pk'
    },
    {
  
      id: 'Grephen Almas',
      pid: 'Logistics',
      name: 'Grephen Almas',
      title: 'Logistics Manager',
      img: './assets/images/Color/12.png',
      email: 'grephen@eurocentra.com.pk'
    },
    {
  
      id: 'Mehreen Idrees',
      pid: 'Grephen Almas',
      name: 'Mehreen Idrees',
      title: 'Assisstant Logistics Manager',
      img: './assets/images/Color/20.png',
      email: 'Mehreen@eurocentra.com.pk'
    },
    {
  
      id: 'Sikandar Solangi',
      pid: 'PL',
      name: 'Sikandar Solangi',
      title: 'Librarian',
      img: './assets/images/Color/60.png',
      email: ''
    },
    {
  
      id: 'TBH',
      pid: 'HAM',
      name: 'TBH',
      title: 'Happiness Officer',
      img: './assets/images/Color/no-image.png',
      email: ''
    },
    {
      id: 'Muhammad Safwan Khan',
      pid: 'TBH',
      name: 'Muhammad Safwan Khan',
      title: 'Working Student',
      img: './assets/images/Color/6.png',
      email: 'hr@eurocentra.com.pk'
    },
    {
  
      id: 'Sajjad Hussain',
      pid: 'Lead5',
      name: 'Sajjad Hussain',
      title: 'IT & Communication Manager',
      img: './assets/images/Color/56.png',
      email: 'it@eurocentra.com.pk'
    },
    {
  
      id: 'Abdul Manan',
      pid: 'Sajjad Hussain',
      name: 'Abdul Manan',
      title: 'Facility Services Manager',
      img: './assets/images/Color/57.png',
      email: 'abdulmanan@eurocentra.com.pk'
    },
    {
  
      id: 'Pervez Ahmed',
      pid: 'Abdul Manan',
      name: 'Pervez Ahmed',
      title: 'Front Desk officer',
      img: './assets/images/Color/55.png',
      email: 'pervez@eurocentra.com.pk'
    },
    {
      id: 'Naeem',
      pid: 'Pervez Ahmed',
      name: 'Naeem',
      title: 'Facility Officer',
      img: './assets/images/Color/54.png',
      email: ''
    },
    {
      id: 'Javaid',
      pid: 'Naeem',
      name: 'Javaid',
      title: 'Chauffeur',
      img: './assets/images/Color/53.png',
      email: ''
    },
  ]);



document.getElementById('editForm').addEventListener('click', function (e) {
    e.preventDefault();
    chart.editUI.hide();
})
