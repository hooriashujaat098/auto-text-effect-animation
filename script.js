const containerEl = document.querySelector(".container");

const roles = ["Web Developer", "Freelancer", "Web Designer"];

let rolesIndex = 0;

let characterIndex = 0;

updateText();

function updateText() {
  characterIndex++;
  containerEl.innerHTML = `
    <h1>I am a ${roles[rolesIndex].slice(0, characterIndex)} </h1>
`;
  if (characterIndex === roles[rolesIndex].length) {
    rolesIndex++;
    characterIndex = 0;
  }

  if(rolesIndex === roles.length){
    rolesIndex = 0;
  }
  setTimeout(updateText, 400);
}
