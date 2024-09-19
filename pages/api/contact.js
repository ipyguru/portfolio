import TelegramBot from 'node-telegram-bot-api'

const bot = new TelegramBot(process.env.TELEGRAM_BOT_TOKEN)
const chatId = process.env.TELEGRAM_CHAT_ID

/**
 * Sends a message to a specified Telegram chat.
 * @param {string} message - The message to be sent.
 */
const sendTelegramMessage = async (message) => {
    try {
        await bot.sendMessage(chatId, message, { parse_mode: 'Markdown' })
    } catch (error) {
        console.error('Ошибка отправки сообщения в Telegram:', error)
    }
}

/**
 * API handler for processing form submissions.
 * @param {object} req - The request object.
 * @param {object} res - The response object.
 */
export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            // Деконструируем данные формы из тела запроса
            const { recaptchaToken, name, email, subject, message } = req.body

            // Проверка наличия токена reCAPTCHA
            if (!recaptchaToken) {
                return res.status(400).json({ success: false, message: 'Отсутствует токен reCAPTCHA' })
            }

            // Проверка reCAPTCHA
            const recaptchaSecretKey = process.env.RECAPTCHA_SECRET_KEY
            const recaptchaUrl = 'https://www.google.com/recaptcha/api/siteverify'

            const recaptchaResponse = await fetch(recaptchaUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: new URLSearchParams({
                    secret: recaptchaSecretKey,
                    response: recaptchaToken,
                }),
            })

            const recaptchaResult = await recaptchaResponse.json()

            // Логируем результат проверки reCAPTCHA для отладки
            console.log('Результат проверки reCAPTCHA:', recaptchaResult)

            if (!recaptchaResult.success) {
                return res.status(400).json({ success: false, message: 'Ошибка проверки reCAPTCHA' })
            }

            // Формируем сообщение для отправки в Telegram
            const telegramMessage = `
                *📩 Новое сообщение из портфолио!*

                👤 *Имя:* ${name}
                ✉️ *Email:* ${email}
                🗂️ *Тема:* ${subject}

                💬 *Сообщение:*
                ${message}

                ---
            `

            // Отправляем сообщение в Telegram
            await sendTelegramMessage(telegramMessage)

            return res.status(200).json({ success: true })
        } catch (error) {
            console.error('Ошибка при обработке формы:', error)
            return res.status(500).json({ success: false, message: 'Внутренняя ошибка сервера' })
        }
    } else {
        res.setHeader('Allow', ['POST'])
        res.status(405).end(`Метод ${req.method} не разрешён`)
    }
}