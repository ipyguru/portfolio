// aboutData.js
import { FaCss3, FaFigma, FaHtml5, FaJs, FaReact, FaWordpress, FaProjectDiagram, FaGithub } from 'react-icons/fa'
import { SiNextdotjs, SiRabbitmq, SiPostgresql } from 'react-icons/si'
import { MdHttp } from "react-icons/md"

export const aboutData = [
	{
		title: 'Скилы',
		info: [
			{
				title: '1С Разработка',
				icons: ["/1c_icon.png", FaProjectDiagram, FaGithub, SiRabbitmq, SiPostgresql, MdHttp],
			},
			{
				title: 'Веб-разработка',
				icons: [FaHtml5, FaCss3, FaJs, FaReact, SiNextdotjs],
			},
			{
				title: 'UI/UX Дизайн',
				icons: [FaFigma,],
			},
		],
	},
	{
		title: 'достижения',
		info: [
			{ title: 'Разработка системы складской логистики для оператора 3PL на адресном складе класса "А"', stage: '2003-2024', icons: ["/1c_icon.png",] },
			{ title: 'Интеграция и запуск различных WMS систем для таких клиентов, как: Nestle, Pepsico, Rostelecom', stage: '2001 - 2024' },
			{ title: 'Спец. конф. "Учет мат. стола"', stage: '2001 - 2002' },
			{ title: 'Спец. конф. для зернового комбината', stage: '2001 - 2002' },
		],
	},
	{
		title: 'опыт',
		info: [
			{ title: 'АО "Легпромресурс"", г. Саратов', stage: '2023 г.' },
			{ title: 'ООО "ИТА-РУС", г. Санкт-Петербург', stage: '2020 г.' },
			{ title: 'ООО "Лидер-С", г.Саратов', stage: '2003 г.' },
			{ title: 'ООО "Софит-Компьютерные системы". г.Саратов', stage: '2001 г.' },
		],
	},
	{
		title: 'квалификация',
		info: [
			{ title: 'Автоматизация малого и среднего производственного предприятия в "1С Управление нашей фирмой"', stage: '2024 г.' },
			{ title: 'python backend developer, Яндекс, г.Москва', stage: '2022 г.' },
			{ title: 'Саратовский государственный университет им. Н.Г. Чернышевского, Мех-Мат, г. Саратов', stage: '2001 г.' },
		],
	},
]