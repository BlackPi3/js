const breakfastMenu = ['Pancakes', 'Eggs Benedict', 'Oatmeal', 'Frittata'];
const mainCourseMenu = ['Steak', 'Pasta', 'Burger', 'Salmon'];
const dessertMenu = ['Cake', 'Ice Cream', 'Pudding', 'Fruit Salad'];

// breakfast menu items
const breakfastMenuItemsHTML = breakfastMenu.map((item, index) => `<p>Item ${index + 1}: ${item}</p>`).join("");
document.getElementById("breakfastMenuItems").innerHTML = breakfastMenuItemsHTML;

// main course menu items
let mainCourseItemsHTML = "";
mainCourseMenu.forEach((item, index) => mainCourseItemsHTML += `<p>Item ${index + 1}: ${item}</p>`);
document.getElementById("maincourseMenuItems").innerHTML = mainCourseItemsHTML;

// dessert menu items
let dessertMenuItems = "";
for (let i = 0; i < dessertMenu.length; i++) {
    // window.alert(i + " " + dessertMenu[i]);
    dessertMenuItems += `<p>Item ${i + 1}: ${dessertMenu[i]}</p>`;
}
document.getElementById("dessertMenuItems").innerHTML = dessertMenuItems;