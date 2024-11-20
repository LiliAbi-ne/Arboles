// Clase Nodo
class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Nodos de los árboles
const trees = {
  1: {
    root: createTree1(),
    image: "img/tree1.png", // Ruta a la imagen del Árbol 1
  },
  2: {
    root: createTree2(),
    image: "img/tree2.png", // Ruta a la imagen del Árbol 2
  },
  3: {
    root: createTree3(),
    image: "img/tree3.png", // Ruta a la imagen del Árbol 3
  },
  4: {
    root: createTree4(),
    image: "img/tree4.png", // Ruta a la imagen del Árbol 4
  },
};

// Árbol seleccionado actualmente
let currentTree = trees[1];

// Función para seleccionar un árbol
function selectTree(treeNumber) {
  currentTree = trees[treeNumber];
  document.getElementById("tree-image").src = currentTree.image;
  document.getElementById("tree-image").alt = `Árbol ${treeNumber}`;
  document.getElementById("result").innerHTML = ""; // Limpia resultados
}

// Recorridos
function breadthFirstTraversal() {
  const queue = [currentTree.root];
  const result = [];
  while (queue.length > 0) {
    const node = queue.shift();
    result.push(node.value);
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }
  displayResult(result);
}

function preOrderTraversal() {
  const result = [];
  function traverse(node) {
    if (!node) return;
    result.push(node.value);
    traverse(node.left);
    traverse(node.right);
  }
  traverse(currentTree.root);
  displayResult(result);
}

function inOrderTraversal() {
  const result = [];
  function traverse(node) {
    if (!node) return;
    traverse(node.left);
    result.push(node.value);
    traverse(node.right);
  }
  traverse(currentTree.root);
  displayResult(result);
}

function postOrderTraversal() {
  const result = [];
  function traverse(node) {
    if (!node) return;
    traverse(node.left);
    traverse(node.right);
    result.push(node.value);
  }
  traverse(currentTree.root);
  displayResult(result);
}

// Mostrar resultado
function displayResult(result) {
  const resultContainer = document.getElementById("result");
  resultContainer.innerHTML = "";
  result.forEach((value) => {
    const node = document.createElement("div");
    node.classList.add("result-node");
    node.textContent = value;
    resultContainer.appendChild(node);
  });
}

// Creación de árboles
function createTree1() {
  const root = new TreeNode("h");
  root.left = new TreeNode("i");
  root.right = new TreeNode("m");
  root.left.left = new TreeNode("e");
  root.right.left = new TreeNode("a");
  return root;
}

function createTree2() {
  const root = new TreeNode("F");
  root.left = new TreeNode("B");
  root.right = new TreeNode("G");
  root.left.left = new TreeNode("A");
  root.left.right = new TreeNode("D");
  root.right.right = new TreeNode("I");
  root.left.right.left = new TreeNode("C");
  root.left.right.right = new TreeNode("E");
  root.right.right.left = new TreeNode("H");
  return root;
}

function createTree3() {
  const root = new TreeNode(55);
  root.left = new TreeNode(53);
  root.right = new TreeNode(59);
  root.left.left = new TreeNode(48);
  root.left.right = new TreeNode(54);
  root.right.left = new TreeNode(56);
  root.right.right = new TreeNode(63);
  root.left.left.right = new TreeNode(51);
  root.right.left.left = new TreeNode(57);
  root.right.right.left = new TreeNode(61);
  root.right.right.right = new TreeNode(70);
  return root;
}

function createTree4() {
  const root = new TreeNode("A");
  root.left = new TreeNode("B");
  root.right = new TreeNode("C");
  root.left.left = new TreeNode("D");
  root.left.right = new TreeNode("E");
  root.right.left = new TreeNode("G");
  root.right.right = new TreeNode("H");
  root.left.left.left = new TreeNode("J");
  root.left.left.right = new TreeNode("K");
  root.right.left.left = new TreeNode("L");
  root.right.left.right = new TreeNode("M");
  root.right.right.right = new TreeNode("P");
  root.left.left.left.left = new TreeNode("Q");
  root.left.left.right.right = new TreeNode("R");
  return root;
}
