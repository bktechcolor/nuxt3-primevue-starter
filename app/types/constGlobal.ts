export const PAGE_SIZE = 20;

export const PAGE_SIZE_PROJECT_DETAIL = 5;

export const PAGE_SIZE_TBT_ATTENDED = 5;

export const PAGE_SIZE_WORKER_DETAIL_EQUIPMENT = 5;

export const PAGE_SIZE_OFFLINE_MODE = 50;

export const PAGE_SIZE_MAX = 500; //The largest number

export const MAX_LENGTH_INPUT = 255;

export const MAX_LENGTH_INPUT_NUMBER = 10;

//Reset to allow scrolling every 60 seconds.
//This is aimed at accommodating another user who is also creating data, so it needs to be reset to allow for continued scrolling.
export const TIME_RELOAD_ACTIVE_CALL_API_SCROLL = 60 * 1000;

export const LANGUAGE_SELECTION = 'LanguageSelection';

export const WORKER_SETTING = 'WorkerSetting';

export const DEBOUNCE_TIME = 500;

export const TOOLBOXTALK_MAX_FILE_SIZE = 1024 * 1024 * 50; //50MB

export const LESSON_MAX_FILE_SIZE = 1024 * 1024 * 50; //50MB

export const SDS_UPLOAD_CSV_MAX_FILE_SIZE = 1024 * 1024 * 50; //50MB

export const DOCUMENT_MAX_FILE_SIZE = 1024 * 1024 * 50; //50MB

export const CORRECTIVE_ACTION_MAX_FILE_SIZE = 1024 * 1024 * 50; //50MB

export const EQUIPMENT_MAX_FILE_SIZE = 1024 * 1024 * 50; //50MB

export const FORM_BUILDER_PDF_LOGO_MAX_FILE_SIZE = 1024 * 1024 * 50; //50MB

export const INCIDENT_REPORT_MAX_FILE_SIZE = 1024 * 1024 * 50; //50MB

export const CERTIFICATION_MAX_FILE_SIZE = 1024 * 1024 * 50; //50MB

//export, import
export const FORM_BUILDER_MAX_FILE_SIZE_UPLOAD = 1024 * 1024 * 50; //50MB

export const FLAT_FILE_MAX_FILE_SIZE_UPLOAD = 1024 * 1024 * 50; // 50 MB

export const FORM_FILE_SIZE = 1024 * 1024 * 50; //50MB
export const FORM_MAX_FILE = 6; //number file upload
export const FORM_FILE_TYPE = [
  'image/png',
  'image/jpeg',
  'jpeg',
  'png',
  'jpg',
  'application/pdf',
  'pdf',
];

//Validate duplicate name
export const DUPLICATE_KEY_CHECK = 'must be unique';

//Key offline mode
export const STORAGE_PROJECT_KEY = 'harnessOfflineProject';
export const STORAGE_PROJECT_OPTION_KEY = 'harnessOfflineProjectOption';
export const STORAGE_WORKER_KEY = 'harnessOfflineWorker';
export const STORAGE_WORKER_OPTION_KEY = 'harnessOfflineWorkerOption';
export const STORAGE_WORKER_REDUCE_KEY = 'harnessOfflineWorkerReduce';
export const STORAGE_EQUIPMENT_KEY = 'harnessOfflineEquipment';
export const STORAGE_EQUIPMENT_OPTION_KEY = 'harnessOfflineEquipmentOption';
export const STORAGE_FORM_KEY = 'harnessOfflineForm';
export const STORAGE_TOOLBOX_TALK_KEY = 'harnessOfflineToolboxTalk';

//key offline mode base data
export const STORAGE_COMPANY_KEY = 'harnessOfflineCompany';
export const STORAGE_DIVISION_KEY = 'harnessOfflineDivision';
export const STORAGE_DEFICIENCY_TYPE_KEY = 'harnessOfflineDeficiencyType';
export const STORAGE_DOCUMENT_KEY = 'harnessOfflineDocument';
export const STORAGE_DOCUMENT_OPTION_KEY = 'harnessOfflineDocumentOption';
export const STORAGE_MANUFACTURER_KEY = 'harnessOfflineManufacturer';
export const STORAGE_TAG_KEY = 'harnessOfflineTag';
export const STORAGE_PROJECT_TYPE_KEY = 'harnessOfflineProjectType';
export const STORAGE_ROLE_KEY = 'harnessOfflineRole';

export const FILEPOND_SOURCE = 'SafetyHQ';
export const FILEPOND_SOURCE_TYPE = 'local';

export const EXCESS_PART_REMOVED = 'data:image/png;base64,';
