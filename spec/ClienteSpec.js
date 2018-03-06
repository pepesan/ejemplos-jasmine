describe("Cliente", function () {
    var cliente

    beforeEach(function () {
        cliente = new Cliente();
    });
    describe("Cuando se inicializa un cliente con parámetros", function () {
        var nombre = "Pepe";
        var tlf = "912345678";
        var email = "p@p.com";
        var active=true;
        var age=23;

        beforeEach(function () {
            cliente = new Cliente(nombre, tlf, email, active,age);
        });

        it("debería tener los valores correctos", function () {
            //toEqual() igual a
            expect(cliente.nombre).toEqual(nombre);
            expect(cliente.tlf).toEqual(tlf);
            expect(cliente.email).toEqual(email);
            expect(cliente.active).toEqual(active);
            expect(cliente.age).toEqual(age);
            //toContain contiene cadena
            expect(cliente.nombre).toContain("ep");
            //toBeGreaterThan() mayor que
            expect(cliente.age).toBeGreaterThan(18);
            //toBeLessThan() mayor que
            expect(cliente.age).toBeLessThan(40);
            //toMatch() encaja con un patrón
            expect(cliente.email).toMatch(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
        });

    });
    it("El contructor sin parámetros debería colocar los valores a cero", function () {
        //estar rellenado
        expect(cliente.nombre).toBeDefined();
        //también está el toBeUndefined()
        
        //tener un valor igual
        expect(cliente.nombre).toEqual("");
        expect(cliente.tlf).toEqual("");
        expect(cliente.email).toEqual("");
        expect(cliente.active).toEqual(false);
        
        //Ser falso
        expect(cliente.active).toBeFalsy();
        //también existe toBeTruthy()
        
    });
    it("Al llamar a imprimeDatos llama al console.log", function () {
        spyOn(cliente,"imprime");
        cliente.imprimeDatos();
        //comprobamos que se ha llamado a la función
        expect(cliente.imprime).toHaveBeenCalled();
        
        
    });
    afterEach(function () {
        console.log("Aquí podríamos limpiar datos");
    });

});
