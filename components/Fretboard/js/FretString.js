

export default class FretString{
    constructor(c,openNote,yPos){
        this.openNote = openNote;
        this.c = c;
        this.yPos = yPos;


    }

}

/*

we could either have a single instance of a 12 note object and use that as reference for each string object and like start at a different index within the array

or

I could use a different string array for each string that conotains its own notes that could all also have their gosh but notes themselves will all have the same propeties so I could have a note oject containing everything for it like its position and everything or I could use reference to an array of note objects that always stay the same and use seperate arrays to contain things that change like intervals could be the scale root is stored and the relative interval array just gets shifted to the right notes depending on the key.

positions of note could be stored too but that could also be made relative and just contain where the referenced note array is stored.

need to make sure i have keys and stuff all stored within a different class object that gets passed into everything maybe with a function that runs an animation for them idkkk.

*/