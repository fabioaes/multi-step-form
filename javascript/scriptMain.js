import {
  sidebarMark,
  stepOne,
  inputName,
  inputEmail,
  inputPhone,
  btnstepOne,
  requiredName,
  requiredEmail,
  requiredPhone,
  infoSidebar,
  textSidebar,
  textSidebarRemove,
  body,
  // infoSidebarRemove,
  sidebarConteiner,
  main,
  imgBgDesktop,
  sidebarContent,
} from "https://fabioaes.github.io/multi-step-form/javascript/selectorsElement.js";

import {
  stepTwo,
  stepbackTwo,
  optionsContainer_stepTwo,
  optionsstepTwo,
  btnstepTwo,
  requiredPlan,
  pOptionsStepTwo,
} from "https://fabioaes.github.io/multi-step-form/javascript/selectorsElement.js";

import {
  stepThree,
  stepbackThree,
  inputCheckbox,
  stepsubmitThree,
  btnRange,
  pBoxOptions,
} from "https://fabioaes.github.io/multi-step-form/javascript/selectorsElement.js";

import {
  stepFour,
  planName,
  planValue,
  subscribe_info,
  totalValue,
  btnConfirm,
  stepbackFour,
  tky,
  sectionForm,
  pM_y_options,
} from "https://fabioaes.github.io/multi-step-form/javascript/selectorsElement.js";

// VARIABLES
let txt = "";
const Arrayform = [];
const arrayService = [];
var objAddons = new Object();
var totalpriceAddons = 0;
var idemModePlan = "";
//

// [ FUNCTIONS  START ]
//  FUNCTION REQUIRED
function validationForms(input) {
  input.setAttribute("required", "required");
  if (!input.checkValidity()) {
    txt = input.validationMessage;
    input.classList.add("border-required");
    input.removeAttribute("required");
  } else {
    txt = "";
  }
  return txt;
}

//  FUNCTION MESSAGE REQUIRED
function addEvent(element, message) {
  element.addEventListener("keyup", (ev) => {
    ev.preventDefault();
    message.innerText = "";
    element.classList.remove("border-required");
  });
}

//  FUNCTION SCREAN
function screan(step, stepdisplayNone) {
  step.classList.add("display_none_step");
  stepdisplayNone.classList.remove("display_none_step");
}

// FUNCTION BACKSTEP
function backStep(...mark) {
  mark[0].classList.remove("sidebar_mark");
  mark[1].classList.add("sidebar_mark");
}

// FUNCTION CREATE ELEMENTS SERVICE ADD ONS
function creatElementAddons(one) {
  const parentDiv = document.createElement("div");
  const childOne = document.createElement("p");
  const childTwo = document.createElement("p");
  parentDiv.classList.add("service_plan");
  parentDiv.classList.add("service_list");
  childTwo.classList.add("color");
  childOne.innerText = objAddons?.[one]?.namePlan;
  childTwo.innerText = objAddons?.[one]?.value;
  parentDiv.append(childOne, childTwo);
  subscribe_info.append(parentDiv);
}

// FUNCTION INFOS FORM
function userInfo() {
  planName.innerText = `${Arrayform?.[1]?.namePlan}`;
  planValue.innerText = `${Arrayform?.[1]?.valuePlan}`;

  // INFO SELECTED ADD ONS
  if (Object.keys(objAddons).length === 1) {
    creatElementAddons(arrayService[0]);
    totalpriceAddons = Number(objAddons?.[arrayService[0]].price);

    if (idemModePlan === "btn_yearly") {
      totalValue.innerText = `+$${
        Number(totalpriceAddons) + Number(Arrayform[1]?.price)
      }/yr`;
    } else {
      totalValue.innerText = `+$${
        Number(totalpriceAddons) + Number(Arrayform[1]?.price)
      }/mo`;
    }
  }
  if (Object.keys(objAddons).length === 2) {
    creatElementAddons(arrayService[0]);
    creatElementAddons(arrayService[1]);
    totalpriceAddons =
      Number(objAddons?.[arrayService[0]].price) +
      Number(objAddons?.[arrayService[1]].price);

    if (idemModePlan === "btn_yearly") {
      totalValue.innerText = `+$${
        Number(totalpriceAddons) + Number(Arrayform[1]?.price)
      }/yr`;
    } else {
      totalValue.innerText = `+$${
        Number(totalpriceAddons) + Number(Arrayform[1]?.price)
      }/mo`;
    }
  } else if (Object.keys(objAddons).length === 3) {
    creatElementAddons(arrayService[0]);
    creatElementAddons(arrayService[1]);
    creatElementAddons(arrayService[2]);
    totalpriceAddons =
      Number(objAddons?.[arrayService[0]].price) +
      Number(objAddons?.[arrayService[1]].price) +
      Number(objAddons?.[arrayService[2]].price);

    if (idemModePlan === "btn_yearly") {
      totalValue.innerText = `+$${
        Number(totalpriceAddons) + Number(Arrayform[1]?.price)
      }/yr`;
    } else {
      totalValue.innerText = `+$${
        Number(totalpriceAddons) + Number(Arrayform[1]?.price)
      }/mo`;
    }
  } else if (Object.keys(objAddons).length === 0) {
    if (idemModePlan === "btn_yearly") {
      totalValue.innerText = `+$${
        Number(totalpriceAddons) + Number(Arrayform[1]?.price)
      }/yr`;
    } else {
      totalValue.innerText = `+$${
        Number(totalpriceAddons) + Number(Arrayform[1]?.price)
      }/mo`;
    }
  }

  // VALUE FORM COMPLETE
  totalValue.dataset.price =
    Number(Arrayform[1]?.price) + Number(totalpriceAddons);
}
// [FUNCTIONS END]

// REMOVE MESSAGE REQUIRED FORM STEP ONE
addEvent(inputName, requiredName);
addEvent(inputEmail, requiredEmail);
addEvent(inputPhone, requiredPhone);

// [STEP ONE START] EVENT SUBMIT STEP ONE
btnstepOne.addEventListener("click", (ev) => {
  ev.preventDefault();

  //  MESSAGE FORM REQUIRED
  requiredName.innerText = validationForms(inputName);
  requiredEmail.innerText = validationForms(inputEmail);
  requiredPhone.innerText = validationForms(inputPhone);

  // VALIDATION FORM AND SCREAN STEP TWO
  if (
    requiredName.innerText === "" &&
    requiredEmail.innerText === "" &&
    requiredPhone.innerText === ""
  ) {
    // SIDEBAR MARK
    backStep(sidebarMark[0], sidebarMark[1]);

    // STEP DISPLAY
    screan(stepOne, stepTwo);

    const infoUser = {
      Name: `${inputName.value}`,
      Email: `${inputEmail.value}`,
      Phone: `${inputPhone.value}`,
    };
    Arrayform.push(infoUser);
  }
});
// [STEP ONE END]

// [STEP TWO START] - EVENT BTN BACK STEP
stepbackTwo.addEventListener("click", () => {
  screan(stepTwo, stepOne);
  backStep(sidebarMark[1], sidebarMark[0]);
});

// EVENT PLAN SELECTED STEP TWO
optionsstepTwo.forEach((element) => {
  element.addEventListener("click", (ev) => {
    //  REMOVE BORDER AND TEXT TO BOX-PLAN
    optionsstepTwo[0]?.classList.remove("box_required");
    optionsstepTwo[1]?.classList.remove("box_required");
    optionsstepTwo[2]?.classList.remove("box_required");
    requiredPlan.innerText = "";

    // SELECTOR INFOS THE PLAN
    let childBox = document.querySelectorAll(
      `.options_container>.${element.classList[0]}>p`
    );

    // CONDICIONS SELECTED PLAN - NEXT SCREAN
    if (element?.classList[2] === "bgselected") {
      element.classList.remove("bgselected");

      // HABILITY OPTIONS BOX STEP TWO
      if (ev.target.classList[0] === "option_one") {
        optionsstepTwo[1].classList.remove("opacity-box");
        optionsstepTwo[2].classList.remove("opacity-box");
      }
      if (ev.target.classList[0] === "option_two") {
        optionsstepTwo[0].classList.remove("opacity-box");
        optionsstepTwo[2].classList.remove("opacity-box");
      }
      if (ev.target.classList[0] === "option_three") {
        optionsstepTwo[0].classList.remove("opacity-box");
        optionsstepTwo[1].classList.remove("opacity-box");
      }

      const arrayFilter = Arrayform.find(
        (nameElement) => nameElement === element.classList[0]
      );
      const index = Arrayform.indexOf(arrayFilter);
      Arrayform.splice(index, 1);
    } else {
      // INFOS PLAN
      let namePlan = childBox[0].innerText;
      let valuePlan = childBox[1].innerText;
      let pricePlan = childBox[1].dataset.price;
      let nameObj = element.classList[0];

      // CREATE OBJ INFOS PLAN USER SELECTED
      nameObj = {
        namePlan: `${namePlan}`,
        valuePlan: `${valuePlan}`,
        price: `${pricePlan}`,
      };

      // CONDITION TO ARRAY INFO
      if (Arrayform.length === 1) {
        Arrayform.push(nameObj);
        element.classList.add("bgselected");

        // DISABLED OPTIONS BOX STEP TWO
        if (ev.target.classList[0] === "option_one") {
          optionsstepTwo[1].classList.add("opacity-box");
          optionsstepTwo[2].classList.add("opacity-box");
        }
        if (ev.target.classList[0] === "option_two") {
          optionsstepTwo[0].classList.add("opacity-box");
          optionsstepTwo[2].classList.add("opacity-box");
        }
        if (ev.target.classList[0] === "option_three") {
          optionsstepTwo[0].classList.add("opacity-box");
          optionsstepTwo[1].classList.add("opacity-box");
        }
      }
    }
  });
});

// SUBMIT STEP TWO --> NEXT STEP THREE
btnstepTwo.addEventListener("click", () => {
  if (Arrayform.length === 2) {
    backStep(sidebarMark[1], sidebarMark[2]);
    screan(stepTwo, stepThree);
  } else {
    optionsstepTwo.forEach((box) => {
      box.classList.add("box_required");
    });
    requiredPlan.innerText = "Selecione um plano";
  }
});
// [STEP TWO END]

// STEP THREE [START]
// BTN BACK STEP THREE
stepbackThree.addEventListener("click", (ev) => {
  ev.preventDefault();
  screan(stepThree, stepTwo);
  backStep(sidebarMark[2], sidebarMark[1]);
});

// INPUT CHECKBOX : CHECKED - STEP THREE
inputCheckbox.forEach((checked) => {
  checked.addEventListener("click", () => {
    const valueAddons = document.querySelector(
      `.${checked.parentNode.classList[1]}>.value_addons`
    );
    const nameAddons = document.querySelector(
      `.${checked.parentNode.classList[1]}>.service>.first_child`
    );

    if (checked.parentNode?.classList[2] === "bgselectedAddons") {
      checked.parentNode.classList.remove("bgselectedAddons");
      var nameObj = checked.value;
      delete objAddons?.[nameObj];

      const index = arrayService.indexOf(nameObj);
      arrayService.splice(index, 1);
    } else {
      checked.parentNode.classList.add("bgselectedAddons");
      var nameObjTwo = checked.value;
      arrayService.push(nameObjTwo);

      objAddons[nameObjTwo] = {
        namePlan: nameAddons.innerText,
        value: valueAddons.innerText,
        price: checked.name,
      };
    }
  });
});

// SUBMIT STEP THREE
stepsubmitThree.addEventListener("click", (ev) => {
  ev.preventDefault();
  backStep(sidebarMark[2], sidebarMark[3]);
  screan(stepThree, stepFour);
  userInfo();
});
// STEP THREE [END]

// STEP FOUR [START]
// BTN BACK STEP FOUR
stepbackFour.addEventListener("click", (ev) => {
  ev.preventDefault();
  screan(stepFour, stepThree);
  backStep(sidebarMark[3], sidebarMark[2]);

  // REMOVE SERVICE SELECTED
  const div = document.querySelectorAll(".subscribe_info>.service_list");
  div.forEach((element) => {
    subscribe_info.removeChild(element);
  });
});

// INPUT RANGE MON/YEAR
btnRange.forEach((btn) => {
  btn.addEventListener("click", (ev) => {
    idemModePlan = ev.target.getAttribute("id");

    if (ev.target.getAttribute("id") === "btn_yearly") {
      ev.target.classList.remove("btn_range_display_none");
      btnRange[0].classList.add("btn_range_display_none");
      pOptionsStepTwo[0].innerText = "$90/yr";
      pOptionsStepTwo[0].dataset.price = "90";
      pOptionsStepTwo[1].innerText = "$120/yr";
      pOptionsStepTwo[1].dataset.price = "120";
      pOptionsStepTwo[2].innerText = "$150/yr";
      pOptionsStepTwo[2].dataset.price = "150";
      pM_y_options[0].classList.remove("color");
      pM_y_options[1].classList.add("color");
      pBoxOptions[0].innerText = "+$10/yr";
      pBoxOptions[1].innerText = "+$20/yr";
      pBoxOptions[2].innerText = "+$20/yr";
      inputCheckbox[0].name = "10";
      inputCheckbox[1].name = "20";
      inputCheckbox[2].name = "20";
    }
    if (ev.target.getAttribute("id") === "btn_monthly") {
      ev.target.classList.remove("btn_range_display_none");
      btnRange[1].classList.add("btn_range_display_none");
      pOptionsStepTwo[0].innerText = "$9/mo";
      pOptionsStepTwo[0].dataset.price = "9";
      pOptionsStepTwo[1].innerText = "$12/mo";
      pOptionsStepTwo[1].dataset.price = "12";
      pOptionsStepTwo[2].innerText = "$15/mo";
      pOptionsStepTwo[2].dataset.price = "15";
      pM_y_options[1].classList.remove("color");
      pM_y_options[0].classList.add("color");
      pBoxOptions[0].innerText = "+$1/mo";
      pBoxOptions[1].innerText = "+$2/mo";
      pBoxOptions[2].innerText = "+$2/mo";
      inputCheckbox[0].name = "1";
      inputCheckbox[1].name = "2";
      inputCheckbox[2].name = "2";
    }
  });
});

// CONFIRM FORM
btnConfirm.addEventListener("click", (ev) => {
  ev.preventDefault();
  screan(stepFour, tky);
  Arrayform.push({ serviceAddons: arrayService });
  Arrayform.push({ totalValue: totalValue.dataset.price });
});
// STEP THREE [END]




function mobileResponse (x) {
  if (x.matches) {
      // CREATE NEW SIDEBAR
      const newSidebar = document.createElement('div')
      newSidebar.setAttribute('id','new')
      newSidebar.classList.add('img_bg_mobile')
      const bgImgMobile = document.createElement('img')
      bgImgMobile.setAttribute('src', './assets/bg-sidebar-mobile.svg')
      newSidebar.append(bgImgMobile)
      // body.append(newSidebar)
      body.insertAdjacentElement('afterbegin', newSidebar)

      // REMOVE BG DESKTOP
      sidebarConteiner.removeChild(imgBgDesktop)
      // REMOVE SIDEBAR CONTAINER
      main.removeChild(sidebarConteiner)
      // NEW SIDEBAR TOP BODY
      newSidebar.append(sidebarConteiner)

      // sidebarConteiner.append(sidebarContent)
      sidebarContent.classList.add('response-mobile_sidebar')
      sidebarConteiner.classList.add('new-style')
      sectionForm.classList.add('main_mobile')

         // REMOVE TEXT INFO TO SIDEBAR AFTER
         infoSidebar[0].removeChild(textSidebarRemove[0])
         infoSidebar[1].removeChild(textSidebarRemove[1])
         infoSidebar[2].removeChild(textSidebarRemove[2])
         infoSidebar[3].removeChild(textSidebarRemove[3])
         
            // STYLE STEP TWO RESPONSE MOBILE 
            // optionsContainer_stepTwo.setAttribute('id', 'stepTwo_response')
            // optionsstepTwo[0].classList.add('box_stepTwo_response')
            // optionsstepTwo[1].classList.add('box_stepTwo_response')
            // optionsstepTwo[2].classList.add('box_stepTwo_response')
      
      } else {
           const sidebarNew = document.querySelector('body>#new')  

          if (body.children.length !== 1)  {

          body.removeChild(sidebarNew)
          sidebarConteiner.append(imgBgDesktop)
          main?.append(sidebarConteiner)
          sidebarContent.classList.remove('response-mobile_sidebar')
          sidebarConteiner.classList.remove('new-style')
          sectionForm.classList.remove('main_mobile')

          // REMOVE TEXT INFO TO SIDEBAR AFTER
         infoSidebar[0].append(textSidebarRemove[0])
         infoSidebar[1].append(textSidebarRemove[1])
         infoSidebar[2].append(textSidebarRemove[2])
         infoSidebar[3].append(textSidebarRemove[3])

         main.insertAdjacentElement('afterbegin', sidebarConteiner)
      } }
  }

var x = window.matchMedia("(max-width: 700px)")
mobileResponse(x)
x.addEventListener('change',  mobileResponse)

