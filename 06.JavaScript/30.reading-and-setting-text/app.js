const paragraph = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem deserunt dolorem nostrum, eius fugit, velit soluta a voluptate numquam impedit temporibus est rerum. Qui accusamus iure distinctio dolorem. Nulla, sunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem deserunt dolorem nostrum, eius fugit, velit soluta a voluptate numquam impedit temporibus est rerum. Qui accusamus iure distinctio dolorem. Nulla, sunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem deserunt dolorem nostrum, eius fugit, velit soluta a voluptate numquam impedit temporibus est rerum. Qui accusamus iure distinctio dolorem. Nulla, sunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem deserunt dolorem nostrum, eius fugit, velit soluta a voluptate numquam impedit temporibus est rerum. Qui accusamus iure distinctio dolorem. Nulla, sunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem deserunt dolorem nostrum, eius fugit, velit soluta a voluptate numquam impedit temporibus est rerum. Qui accusamus iure distinctio dolorem. Nulla, sunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem deserunt dolorem nostrum, eius fugit, velit soluta a voluptate numquam impedit temporibus est rerum. Qui accusamus iure distinctio dolorem. Nulla, sunt.`;
const element = document.querySelector("#para");

window.seeMore = () => {
  element.innerHTML = paragraph + "<a onclick='seeLess(event)'>see less</a>";
};

window.seeLess = () => {
  // element.innerText = paragraph.split(" ").slice(0, 50).join(' ')
  element.innerHTML =
    paragraph.slice(0, 200) +
    "..." +
    "<a onclick='seeMore(event)'> see more </a>";
};
seeLess();
