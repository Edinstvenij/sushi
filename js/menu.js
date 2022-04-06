
const categorys = document.querySelectorAll('.catalog__item'),
  contents = document.querySelectorAll('.menu__content');
let indexTab = 0;

const activeTab = n => {
  for (category of categorys) {
    category.classList.remove('active');
  };
  for (content of contents) {
    content.classList.remove('active');
  };
  categorys[n].classList.add('active');
  contents[n].classList.add('active');
};

categorys.forEach((itemTab, indexTabs) => {
  itemTab.addEventListener('click', () => {
    indexTab = indexTabs;
    activeTab(indexTab);
  });
});








const productSize = document.querySelector('.item__size');

const deleteSize = () => {
  for (size of productSize) {
    size.classList.remove('active');
  };
}
const activeSize = () => {
  productSize.addEventListener('click', (e) => {
    deleteSize();
    let target = e.target;
    console.log(target);
    target.classList.add('active');


  });
};
activeSize();

