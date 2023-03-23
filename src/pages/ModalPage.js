import Modal from "../components/Modal";
import Button from "../components/Button";
import { useState } from "react";

function ModalPage(){
    const [showModal, setShowModal] = useState(false);
    
    const handleClick = () => {
        setShowModal(true);
    }

    const handleClose = () => {
        setShowModal(false);
    }

    const actionBar = (<div>
        <Button onClick={handleClose} primary>I accept</Button>
        </div>);
    const modal = (<Modal onClose={handleClose} actionBar={actionBar}>
        <p>An agreement for you to accept</p>
    </Modal>);

    return <div>
        <Button onClick={handleClick} primary>Open Modal</Button>
        {showModal && modal}
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vehicula quis ligula id pulvinar. Donec placerat orci eget nisi pharetra placerat. Integer molestie lorem arcu. Cras in felis ac magna malesuada semper sed id ligula. Suspendisse rhoncus placerat nibh sit amet venenatis. Vestibulum fermentum, massa sed accumsan hendrerit, mauris erat aliquet ipsum, quis bibendum orci dolor at ante. Donec ut dui id diam congue vestibulum. Phasellus sed est ullamcorper, interdum ligula vitae, elementum neque. Pellentesque at lectus leo. Donec vestibulum varius finibus.
        </p>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vehicula quis ligula id pulvinar. Donec placerat orci eget nisi pharetra placerat. Integer molestie lorem arcu. Cras in felis ac magna malesuada semper sed id ligula. Suspendisse rhoncus placerat nibh sit amet venenatis. Vestibulum fermentum, massa sed accumsan hendrerit, mauris erat aliquet ipsum, quis bibendum orci dolor at ante. Donec ut dui id diam congue vestibulum. Phasellus sed est ullamcorper, interdum ligula vitae, elementum neque. Pellentesque at lectus leo. Donec vestibulum varius finibus.
        </p>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vehicula quis ligula id pulvinar. Donec placerat orci eget nisi pharetra placerat. Integer molestie lorem arcu. Cras in felis ac magna malesuada semper sed id ligula. Suspendisse rhoncus placerat nibh sit amet venenatis. Vestibulum fermentum, massa sed accumsan hendrerit, mauris erat aliquet ipsum, quis bibendum orci dolor at ante. Donec ut dui id diam congue vestibulum. Phasellus sed est ullamcorper, interdum ligula vitae, elementum neque. Pellentesque at lectus leo. Donec vestibulum varius finibus.
        </p>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vehicula quis ligula id pulvinar. Donec placerat orci eget nisi pharetra placerat. Integer molestie lorem arcu. Cras in felis ac magna malesuada semper sed id ligula. Suspendisse rhoncus placerat nibh sit amet venenatis. Vestibulum fermentum, massa sed accumsan hendrerit, mauris erat aliquet ipsum, quis bibendum orci dolor at ante. Donec ut dui id diam congue vestibulum. Phasellus sed est ullamcorper, interdum ligula vitae, elementum neque. Pellentesque at lectus leo. Donec vestibulum varius finibus.
        </p>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vehicula quis ligula id pulvinar. Donec placerat orci eget nisi pharetra placerat. Integer molestie lorem arcu. Cras in felis ac magna malesuada semper sed id ligula. Suspendisse rhoncus placerat nibh sit amet venenatis. Vestibulum fermentum, massa sed accumsan hendrerit, mauris erat aliquet ipsum, quis bibendum orci dolor at ante. Donec ut dui id diam congue vestibulum. Phasellus sed est ullamcorper, interdum ligula vitae, elementum neque. Pellentesque at lectus leo. Donec vestibulum varius finibus.
        </p>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vehicula quis ligula id pulvinar. Donec placerat orci eget nisi pharetra placerat. Integer molestie lorem arcu. Cras in felis ac magna malesuada semper sed id ligula. Suspendisse rhoncus placerat nibh sit amet venenatis. Vestibulum fermentum, massa sed accumsan hendrerit, mauris erat aliquet ipsum, quis bibendum orci dolor at ante. Donec ut dui id diam congue vestibulum. Phasellus sed est ullamcorper, interdum ligula vitae, elementum neque. Pellentesque at lectus leo. Donec vestibulum varius finibus.
        </p>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vehicula quis ligula id pulvinar. Donec placerat orci eget nisi pharetra placerat. Integer molestie lorem arcu. Cras in felis ac magna malesuada semper sed id ligula. Suspendisse rhoncus placerat nibh sit amet venenatis. Vestibulum fermentum, massa sed accumsan hendrerit, mauris erat aliquet ipsum, quis bibendum orci dolor at ante. Donec ut dui id diam congue vestibulum. Phasellus sed est ullamcorper, interdum ligula vitae, elementum neque. Pellentesque at lectus leo. Donec vestibulum varius finibus.
        </p>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vehicula quis ligula id pulvinar. Donec placerat orci eget nisi pharetra placerat. Integer molestie lorem arcu. Cras in felis ac magna malesuada semper sed id ligula. Suspendisse rhoncus placerat nibh sit amet venenatis. Vestibulum fermentum, massa sed accumsan hendrerit, mauris erat aliquet ipsum, quis bibendum orci dolor at ante. Donec ut dui id diam congue vestibulum. Phasellus sed est ullamcorper, interdum ligula vitae, elementum neque. Pellentesque at lectus leo. Donec vestibulum varius finibus.
        </p>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vehicula quis ligula id pulvinar. Donec placerat orci eget nisi pharetra placerat. Integer molestie lorem arcu. Cras in felis ac magna malesuada semper sed id ligula. Suspendisse rhoncus placerat nibh sit amet venenatis. Vestibulum fermentum, massa sed accumsan hendrerit, mauris erat aliquet ipsum, quis bibendum orci dolor at ante. Donec ut dui id diam congue vestibulum. Phasellus sed est ullamcorper, interdum ligula vitae, elementum neque. Pellentesque at lectus leo. Donec vestibulum varius finibus.
        </p>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vehicula quis ligula id pulvinar. Donec placerat orci eget nisi pharetra placerat. Integer molestie lorem arcu. Cras in felis ac magna malesuada semper sed id ligula. Suspendisse rhoncus placerat nibh sit amet venenatis. Vestibulum fermentum, massa sed accumsan hendrerit, mauris erat aliquet ipsum, quis bibendum orci dolor at ante. Donec ut dui id diam congue vestibulum. Phasellus sed est ullamcorper, interdum ligula vitae, elementum neque. Pellentesque at lectus leo. Donec vestibulum varius finibus.
        </p>

    </div>
}

export default ModalPage;