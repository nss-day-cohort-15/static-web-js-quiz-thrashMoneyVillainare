var tree = {};
var growButton = document.getElementById('grow_button');
growButton.addEventListener("click", runner);
var showTree = document.getElementById('show_tree');
var branchChar = document.getElementById('branch_character');
var treeHeight = document.getElementById('tree_height');
branchChar.addEventListener("keyup", enterF);

function enterF (e) {
  if (e.key === 'Enter') {
    tree.height = treeHeight.value;
    tree.branch = branchChar.value;
    runner (tree);
    console.log(tree)
}
}

function runner (tree) {

var spaces = " ";
  for (i = 1; i <= tree.height; i++) {
  console.log(spaces.repeat(tree.height - i) + (tree.branch.repeat((2*i) - 1)));
  //showTree.innerHTML = "spaces.repeat(treeHeight - i) + (branchChar.repeat((2*i) - 1))";
  }
}
