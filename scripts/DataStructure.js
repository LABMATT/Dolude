class DataStructure {

    // Constuctor exacutes on object creation
    constructor(name) 
    {
        this.name = name;
        this.child = [];
    }

    getChild()
    {
      return this.child.toString();
    }
}