
import Accordion from "../components/Accordion";

function AccordionPage(){
    const items = [
        {
            id:'vjgsdf',
            label: 'Can I use React on a Project?',
            content: 'You can use React on any project you want.You can use React on any project you want.You can use React on any project you want.You can use React on any project you want.You can use React on any project you want.You can use React on any project you want.You can use React on any project you want.You can use React on any project you want.You can use React on any project you want.'
        },
        {
            id:'jhik',
            label: 'Can I use Javascript on a Project?',
            content: 'You can use React on any project you want.You can use React on any project you want.You can use React on any project you want.You can use React on any project you want.You can use React on any project you want.You can use React on any project you want.You can use React on any project you want.You can use React on any project you want.You can use React on any project you want.'

        },
        {
            id: 'jkjg',
            label: 'Can I use CSS on a Project?',
            content: 'You can use React on any project you want.You can use React on any project you want.You can use React on any project you want.You can use React on any project you want.You can use React on any project you want.You can use React on any project you want.You can use React on any project you want.You can use React on any project you want.You can use React on any project you want.'

        }
    ]
    return <Accordion items={items}/>
}

export default AccordionPage;