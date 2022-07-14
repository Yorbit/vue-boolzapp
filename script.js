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
                },
                {
                    name: 'Fabio',
                    avatar: '_2',
                    visible: true,
                },
                {
                    name: 'Samuele',
                    avatar: '_3',
                    visible: true,
                },
                {
                    name: 'Luisa',
                    avatar: '_6',
                    visible: true,
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