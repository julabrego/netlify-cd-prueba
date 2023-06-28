const form = document.getElementById("form");
const newItemInput = document.getElementById("newItemInput");
const itemContainer = document.getElementById("itemContainer");

form.onsubmit = (e) => {
  e.preventDefault();
  const value = newItemInput.value.trim();

  if (value !== "") {
    const li = document.createElement("li");
    li.innerHTML = `<strong>${itemContainer.childNodes.length}:</strong> ${value}`;

    itemContainer.append(li);
  }
};
