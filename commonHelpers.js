import"./assets/menu-b1365ee6.js";import"./assets/main-78a75f20.js";document.addEventListener("DOMContentLoaded",function(){var o=document.getElementById("btn-copy"),t=document.getElementById("notification");o.addEventListener("click",function(){var n="Текст, який ви хочете скопіювати",e=document.createElement("textarea");e.value=n,document.body.appendChild(e),e.select(),document.execCommand("copy"),document.body.removeChild(e),t.textContent="The text is copied to the clipboard!",t.style.display="block",setTimeout(function(){t.classList.add("notification-show")},10),setTimeout(function(){t.classList.remove("notification-show")},2100)})});
//# sourceMappingURL=commonHelpers.js.map
