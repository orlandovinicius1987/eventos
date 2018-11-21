const __emptySelect = {
    where:{
        filter: null,
    },
    joins: null,
}

export const common = {
    service: { performLoad: true },

    data: {
        filter: {
            text: null,

            checkboxes: {
                filler: false,
            },

            selects: {
                filler: false,

                personInstitution:{
                    from_table:'person_institutions',

                    tables:{
                        role:null,
                        institution:null,
                    },
                }
            },
        },

        links: {
            pagination: {
                per_page: 5,

                current_page: 1,
            },
        },

        order: {},
    },

    selected: { id: null },
}
