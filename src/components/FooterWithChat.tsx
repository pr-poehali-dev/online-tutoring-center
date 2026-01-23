import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function FooterWithChat() {
  const scrollToForm = () => {
    document.getElementById('contacts')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-purple-700 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">P</span>
                </div>
                <span className="text-2xl font-bold font-montserrat">PERFEKZ</span>
              </div>
              <p className="text-gray-400 leading-relaxed">Онлайн-репетиторы с прозрачным процессом</p>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-white">Предметы</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Математика</li>
                <li>Русский язык</li>
                <li>Английский язык</li>
                <li>Информатика</li>
                <li>Химия</li>
                <li>Биология</li>
                <li>Обществознание</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-white">Компания</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#how" className="hover:text-white transition-colors">Как работаем</a></li>
                <li><a href="#tariffs" className="hover:text-white transition-colors">Тарифы</a></li>
                <li><a href="#reviews" className="hover:text-white transition-colors">Отзывы</a></li>
                <li><a href="#contacts" className="hover:text-white transition-colors">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-white">Документы</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Лицензия</li>
                <li>Оферта</li>
                <li>Политика конфиденциальности</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
            <p>© 2024 PERFEKZ. ИП Иванов И.И. ИНН 123456789012. Все права защищены.</p>
          </div>
        </div>
      </footer>

      <Button
        onClick={scrollToForm}
        className="fixed bottom-6 right-6 w-auto px-6 h-16 rounded-full bg-accent hover:bg-accent/90 text-white font-semibold shadow-2xl hover:scale-105 transition-transform z-50 hidden md:flex items-center gap-2"
      >
        <Icon name="Sparkles" size={20} />
        <span>Записаться на бесплатное занятие</span>
      </Button>

      <Button
        onClick={scrollToForm}
        className="fixed bottom-6 right-6 w-16 h-16 rounded-full bg-accent hover:bg-accent/90 text-white shadow-2xl hover:scale-105 transition-transform z-50 flex md:hidden items-center justify-center"
      >
        <Icon name="Sparkles" size={24} />
      </Button>
    </>
  );
}