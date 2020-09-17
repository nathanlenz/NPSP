import { LightningElement } from 'lwc';

export default class NonProfit_Resources extends LightningElement {

    resoruces = [
        {
            id: 1, label: 'Nonprofit Cloud Basics', linkLabel: 'Get to Know Nonprofit Cloud', link: 'http://localhost:8080/1'
        },
        {
            id: 2, label: 'Fundraising Learning Path', linkLabel: 'Start Fundrasing', link: 'http://localhost:8080/2'
        },
        {
            id: 3,
            label: 'Program Management Learing Path',
            linkLabel: 'Get Started',
            link: 'http://localhost:8080/3'
        },
        {
            id: 4,
            label: 'Marketing/Engagemnet Learning Path',
            linkLabel: 'Get Started',
            link: 'http://localhost:8080/4'
        },
        {
            id: 5,
            label: 'Free Webinars',
            linkLabel: 'Join Webinars',
            link: 'http://localhost:8080/5'
        },
        {
            id: 6,
            label: 'Power of Us Hub',
            linkLabel: 'Learn from Other Nonprofits',
            link: 'http://localhost:8080/6'
        },
        {
            id: 7,
            label: 'Implementation Partners',
            linkLabel: 'Find a Partner',
            link: 'http://localhost:8080/7'
        },
    ];
}