const imageInput = document.querySelector("#imageInput");
const topTextInput = document.querySelector("#topTextInput");
const bottomTextInput = document.querySelector("#bottomTextInput");
const addMemeButton = document.querySelector("#addMemeButton");

// event listener for the "Add meme" button
addMemeButton.addEventListener("click", function () {
  const memeContainer = document.createElement("div");
  memeContainer.classList.add("meme-container");

  // make sure all fields are filled
  if (
    imageInput.value === "" ||
    topTextInput.value === "" ||
    bottomTextInput.value === ""
  ) {
    alert("Please fill all fields");
    return;
  }

  //create an image element
  const memeImage = document.createElement("img");
  memeImage.src = imageInput.value;

  //create top text element
  const topText = document.createElement("div");
  topText.classList.add("top-text");
  topText.innerText = topTextInput.value;

  //create bottom text element
  const bottomText = document.createElement("div");
  bottomText.classList.add("bottom-text");
  bottomText.innerText = bottomTextInput.value;

  // button to delete meme
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "Delete";
  deleteButton.addEventListener("click", function () {
    memeContainer.remove();
  });

  //append
  memeContainer.appendChild(deleteButton);
  memeContainer.appendChild(memeImage);
  memeContainer.appendChild(topText);
  memeContainer.appendChild(bottomText);

  // add the meme to the page
  document.body.appendChild(memeContainer);

  //clear input fields
  imageInput.value = "";
  topTextInput.value = "";
  bottomTextInput.value = "";
});
