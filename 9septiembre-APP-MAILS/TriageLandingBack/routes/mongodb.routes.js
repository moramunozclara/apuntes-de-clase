import { Router } from "express";

import { getEmails,
        getEmailsById,
        createEmail,
        deleteEmail,
        updateEmail
} from '../controllers/correos.mongo.controller.js'

const router = Router();


router.get('/correos', getEmails);
router.get('/correos/:id', getEmailsById);

router.post('/correos', createEmail);

router.delete('/correos/:id', deleteEmail);

router.patch('/correos/:id', updateEmail) //marcar como leído




export default router;