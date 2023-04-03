/*Milestone 1 replica della grafica con la possibilità di avere messaggi scritti dall'utente (verdi) e dell'interlocutore(bianco )assegnando due classi css diverse.
visualizzazione dinamica della lista contatti:tramite la direttiva v-for,visualizzare nome e immagine di ogni contatto.*/
/*Milestone 2
Visualizzazione dinamica dei messaggi: tramite la direttiva v-for, visualizzare tutti i messaggi relativi al contatto attivo all’interno del pannello della conversazione
Click sul contatto mostra la conversazione del contatto cliccato*/

const { createApp } = Vue;

createApp({
    data() {
        return {
          userSelected: 0,
            selected: false,
            contacts: [
                {
                    name: "Michele",
                    avatar: "./img/avatar_1.jpg",
                    visible: true,
                    messages: [
                        {
                            date: "10/01/2020 15:30:55",
                            message: "Hai portato a spasso il cane?",
                            status: 'sent',
                        },
                        {
                            date: "10/01/2020 15:50:00",
                            message: "Ricordati di stendere i panni",
                            status: true,
                        },
                        {
                            date: "10/01/2020 16:15:22",
                            message: "Tutto fatto!",
                            status: false,
                        },
                    ],
                },
                {
                    name: "Fabio",
                    avatar: "./img/avatar_2.jpg",
                    visible: true,
                    messages: [
                        {
                            date: "20/03/2020 16:30:00",
                            message: "Ciao come stai?",
                            status: true,
                        },
                        {
                            date: "20/03/2020 16:30:55",
                            message: "Bene grazie! Stasera ci vediamo?",
                            status: false,
                        },
                        {
                            date: "20/03/2020 16:35:00",
                            message: "Mi piacerebbe ma devo andare a fare la spesa.",
                            status: true,
                        },
                    ],
                },
                {
                    name: "Samuele",
                    avatar: "./img/avatar_3.jpg",
                    visible: true,
                    messages: [
                        {
                            date: "28/03/2020 10:10:40",
                            message: "La Marianna va in campagna",
                            status: false,
                        },
                        {
                            date: "28/03/2020 10:20:10",
                            message: "Sicuro di non aver sbagliato chat?",
                            status: true,
                        },
                        {
                            date: "28/03/2020 16:15:22",
                            message: "Ah scusa!",
                            status: false,
                        },
                    ],
                },
                {
                    name: "Alessandro B.",
                    avatar: "./img/avatar_4.jpg",
                    visible: true,
                    messages: [
                        {
                            date: "10/01/2020 15:30:55",
                            message: "Lo sai che ha aperto una nuova pizzeria?",
                            status: true,
                        },
                        {
                            date: "10/01/2020 15:50:00",
                            message: "Si, ma preferirei andare al cinema",
                            status: false,
                        },
                    ],
                },
                {
                    name: "Alessandro L.",
                    avatar: "./img/avatar_5.jpg",
                    visible: true,
                    messages: [
                        {
                            date: "10/01/2020 15:30:55",
                            message: "Ricordati di chiamare la nonna",
                            status: true,
                        },
                        {
                            date: "10/01/2020 15:50:00",
                            message: "Va bene, stasera la sento",
                            status: false,
                        },
                    ],
                },
                {
                    name: "Claudia",
                    avatar: "./img/avatar_6.jpg",
                    visible: true,
                    messages: [
                        {
                            date: "10/01/2020 15:30:55",
                            message: "Ciao Claudia, hai novità?",
                            status: true,
                        },
                        {
                            date: "10/01/2020 15:50:00",
                            message: "Non ancora",
                            status: false,
                        },
                        {
                            date: "10/01/2020 15:51:00",
                            message: "Nessuna nuova, buona nuova",
                            status: true,
                        },
                    ],
                },
                {
                    name: "Federico",
                    avatar: "./img/avatar_7.jpg",
                    visible: true,
                    messages: [
                        {
                            date: "10/01/2020 15:30:55",
                            message: "Fai gli auguri a Martina che è il suo compleanno!",
                            status: true,
                        },
                        {
                            date: "10/01/2020 15:50:00",
                            message: "Grazie per avermelo ricordato, le scrivo subito!",
                            status: false,
                        },
                    ],
                },
                {
                    name: "Davide",
                    avatar: "./img/avatar_8.jpg",
                    visible: true,
                    messages: [
                        {
                            date: "10/01/2020 15:30:55",
                            message: "Ciao, andiamo a mangiare la pizza stasera?",
                            status: false,
                        },
                        {
                            date: "10/01/2020 15:50:00",
                            message: "No, l'ho già mangiata ieri, ordiniamo sushi!",
                            status: true,
                        },
                        {
                            date: "10/01/2020 15:51:00",
                            message: "OK!!",
                            status: false,
                        },
                    ],
                },
            ],
        };
    },
    methods:{
        userSelect(index){
          this.userSelected = index;
        },
        isSelected(index){
          if(this.userSelected === index){
            return true;
          }
          return false;
        }
      }
    }).mount('#app');
