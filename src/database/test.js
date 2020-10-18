const  Database = require('./db');
const saveOrphanage = require('./saveOrphanage');

Database.then(async db => {
    //inserir dados na tabela
    await saveOrphanage(db, {
        lat: "-27.222633",
        lng:"-49.6555874",
        name: "Lar das meninas",
        about: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
        whatsapp:"987654321",
        images: [
            "https://psmag.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTI3NTgxNDI0NzgwODc2MjU0/ps_goatprotein_052412.jpg",

            "https://psmag.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTI3NTgxNDI0NzgwODc2MjU0/ps_goatprotein_052412.jpg"
        ].toString(),
        instructions: "Venha se sentir a vontade e traga muito amor e paciênia para dar.",
        opening_hours: "Horários de visitas Das 18h até 8h",
        open_on_weekends: "1"
    })
    
    // consultar dados da tabela
    /*const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages)*/

    //consultar somente  orphanato, pelo id
    const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "3"')
    console.log(orphanage)

    //deletar dado da tabela
   // await db.run("DELETE FROM orphanages WHERE id = '1'")
   // await db.run("DELETE FROM orphanages WHERE id = '2'")
})