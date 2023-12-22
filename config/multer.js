import multer from 'multer';
import path from 'path';

const storage = (folder) => multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, `public/uploads/${folder}`)
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname))
  }
})

export const uploadApostila = multer({ storage: storage('apostilas') });
export const uploadTutorial = multer({ storage: storage('tutorials') });