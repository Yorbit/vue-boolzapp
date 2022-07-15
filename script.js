const root = new Vue(
    {
        el: '#root',
        data:
        {
            focusChat: 0,
            users: [
                {
                    name: 'Michele',
                    avatar: '_1',
                    visible: true,
                    mex: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: '_2',
                    visible: true,
                    mex: [
                        {
                            date: '15/07/2022 11:30:00',
                            message: 'Ciao tutto bene?',
                            status: 'sent'
                        },
                        {
                            date: '15/07/2022 11:35:00',
                            message: 'Si, Tutto bene! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '15/07/2022 11:51:00',
                            message: 'Certo, sono libero, dimmi dove e quando',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: '_3',
                    visible: true,
                    mex: [
                        {
                            date: '15/07/2022 12:02:00',
                            message: 'Stasera ci sei al concerto?',
                            status: 'received'
                        },
                        {
                            date: '15/07/2022 12:12:00',
                            message: 'Parli di quello in piazza?',
                            status: 'sent'
                        },
                        {
                            date: '15/07/2022 12:13:00',
                            message: 'In piazza Libertà intendo',
                            status: 'sent'
                        },
                        {
                            date: '15/07/2022 12:18:00',
                            message: 'certo quello',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Luisa',
                    avatar: '_6',
                    visible: true,
                    mex: [
                        {
                            date: '15/07/2022 12:38:00',
                            message: 'Ciao come procede il trasloco?',
                            status: 'sent'
                        },
                        {
                            date: '15/07/2022 12:41:00',
                            message: 'Alla grande! Anche se la stanchezza si fa sentire',
                            status: 'received'
                        },
                        {
                            date: '15/07/2022 12:44:00',
                            message: 'Ti serve una mano con i viaggi?',
                            status: 'sent'
                        }
                    ],
                },
            ],
        },

        methods:
        {
            selectAnotherChat: function (index) {

                this.focusChat = index;

            },

            filterUser: function () {

            },
        }
    }
);