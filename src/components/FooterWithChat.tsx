import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const faqData = [
  {
    question: 'Как проходит бесплатная диагностика?',
    answer: 'Индивидуальное онлайн-занятие длительностью 60 минут. Преподаватель определит уровень знаний и составит персональный план.'
  },
  {
    question: 'Можно ли перенести занятие?',
    answer: 'Да, при предупреждении за 24 часа занятие переносится без потери оплаты.'
  },
  {
    question: 'Как я узнаю о прогрессе ребёнка?',
    answer: 'Регулярные отчёты: на тарифе Стандарт — раз в 2 недели, на Премиум — еженедельно. Плюс контрольные срезы знаний.'
  },
  {
    question: 'Что если не подойдёт преподаватель?',
    answer: 'На тарифе Премиум можем заменить преподавателя. На других тарифах — обсуждаем индивидуально.'
  }
];

export default function FooterWithChat() {
  const [showChatbot, setShowChatbot] = useState(false);
  const [chatMessages, setChatMessages] = useState<Array<{ text: string; isBot: boolean }>>([
    { text: 'Здравствуйте! Я помогу ответить на ваши вопросы о PERFEKZ. Выберите тему:', isBot: true }
  ]);

  const handleChatOption = (question: string, answer: string) => {
    setChatMessages(prev => [...prev, { text: question, isBot: false }, { text: answer, isBot: true }]);
  };

  return (
    <>
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-purple-700 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">P</span>
                </div>
                <span className="text-2xl font-bold font-montserrat">PERFEKZ</span>
              </div>
              <p className="text-gray-400">Онлайн-репетиторский центр с системой контроля результата</p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Предметы</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Математика</li>
                <li>Русский язык</li>
                <li>Английский язык</li>
                <li>Информатика</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Компания</h3>
              <ul className="space-y-2 text-gray-400">
                <li>О нас</li>
                <li>Тарифы</li>
                <li>Отзывы</li>
                <li>Контакты</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Документы</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Лицензия</li>
                <li>Оферта</li>
                <li>Политика конфиденциальности</li>
                <li>Согласие на обработку ПД</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>© 2024 PERFEKZ. ИП Иванов И.И. ИНН 123456789012. Все права защищены.</p>
          </div>
        </div>
      </footer>

      <Button
        onClick={() => setShowChatbot(!showChatbot)}
        className="fixed bottom-6 right-6 w-16 h-16 rounded-full bg-gradient-to-r from-primary to-purple-700 shadow-2xl hover:scale-110 transition-transform z-50"
      >
        <Icon name={showChatbot ? 'X' : 'MessageCircle'} size={28} />
      </Button>

      {showChatbot && (
        <Card className="fixed bottom-24 right-6 w-96 h-[500px] shadow-2xl z-50 flex flex-col animate-slide-in-right">
          <CardHeader className="bg-gradient-to-r from-primary to-purple-700 text-white rounded-t-lg">
            <CardTitle className="flex items-center gap-2">
              <Icon name="Bot" size={24} />
              Чат-помощник PERFEKZ
            </CardTitle>
          </CardHeader>
          <CardContent className="flex-1 overflow-y-auto p-4 space-y-3">
            {chatMessages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'}`}>
                <div className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                  msg.isBot ? 'bg-gray-100 text-gray-800' : 'bg-primary text-white'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {chatMessages.length === 1 && (
              <div className="space-y-2 mt-4">
                {faqData.map((faq, idx) => (
                  <Button
                    key={idx}
                    variant="outline"
                    className="w-full justify-start text-left h-auto py-3"
                    onClick={() => handleChatOption(faq.question, faq.answer)}
                  >
                    {faq.question}
                  </Button>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      )}
    </>
  );
}
