let text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.';

let dinosaur = 'triceratops'.toUpperCase();

let newtext = text.replace('Velociraptor', dinosaur);
console.log(newtext.substr(0, newtext.length/2));