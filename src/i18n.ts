import { initReactI18next } from 'react-i18next'

import i18n from 'i18next'

const resources = {
	en: {
		translation: {
			openFilter: 'Open filter',
			filterTitle: 'Filter rooms',
			guests: 'Guests',
			rooms: 'Rooms',
			bedType: 'Bed type',
			any: 'Any',
			doubleBed: 'Double bed',
			singleBed: 'Single bed',
			apply: 'Apply filter',
			cancel: 'Cancel',
			confirmTitle: 'Apply new filter?',
			confirmText: 'Do you really want to apply these filter settings?',
			confirmYes: 'Yes, apply',
			confirmNo: 'No'
		}
	},
	ru: {
		translation: {
			openFilter: 'Открыть фильтр',
			filterTitle: 'Фильтр номеров',
			guests: 'Гости',
			rooms: 'Комнаты',
			bedType: 'Тип кровати',
			any: 'Любой',
			doubleBed: 'Двуспальная кровать',
			singleBed: 'Односпальная кровать',
			apply: 'Применить фильтр',
			cancel: 'Отмена',
			confirmTitle: 'Применить новый фильтр?',
			confirmText: 'Вы действительно хотите применить эти параметры фильтра?',
			confirmYes: 'Да, применить',
			confirmNo: 'Нет'
		}
	}
}

i18n.use(initReactI18next).init({
	resources,
	lng: 'en',
	fallbackLng: 'en',
	interpolation: {
		escapeValue: false
	}
})

export default i18n
