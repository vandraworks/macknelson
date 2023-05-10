import { createApp } from "vue";
import App from "./App.vue";
import "./styles/main.css";

const app = createApp(App);

for (const m of Object.values(
  import.meta.glob("./modules/*.js", { eager: true })
)) {
  m.install?.(app);
}

app.directive('observer-add-class', {
  mounted(el, binding) {
    function observeElement(element, classToAdd) {
      let config = {
        rootMargin: '0px',
        threshold: .5
      };
      let isLeaving = false;
      let observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            isLeaving = true;
            console.log("Intersected - Entering " + element);
            document.getElementById(element).classList.add(classToAdd);
          } else if (isLeaving) {
            isLeaving = false;
          }
        });
      }, config);
      observer.observe(document.getElementById(element));
    }
    observeElement(el.id, binding.value);
  },
});
app.directive('observer-remove-class', {
  mounted(el, binding) {
    function observeElement(element, classToRemove) {
      let config = {
        rootMargin: '0px',
        threshold: .5
      };
      let isLeaving = false;
      let observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            isLeaving = true;
          } else if (isLeaving) {
            isLeaving = false;
            console.log("Intersected - Leaving " + element);
            document.getElementById(element).classList.remove(classToRemove);
          }
        });
      }, config);
      observer.observe(document.getElementById(element));
    }
    observeElement(el.id, binding.value);
  },
});
app.directive('observer-interact', {
  mounted(el, binding) {
    function observeElement(parentElement, affectedElement) {
      let config = {
        rootMargin: '0px',
        threshold: .1
      };
      let isLeaving = false;
      let observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            isLeaving = true;
            document.getElementById(affectedElement).setAttribute('data-observer-interact', parentElement);
          } else if (isLeaving) {
            isLeaving = false;
            document.getElementById(affectedElement).setAttribute('data-observer-interact', '');
          }
        });
      }, config);
      observer.observe(document.getElementById(parentElement));
    }
    observeElement(el.id, binding.value);
  },
});

app.mount("#app");
