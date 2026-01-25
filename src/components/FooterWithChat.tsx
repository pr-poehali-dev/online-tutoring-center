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
          <div className="grid md:grid-cols-3 gap-8 mb-8">
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
              <a href="/education-info" className="font-semibold mb-4 text-white hover:text-gray-300 transition-colors inline-block">
                Сведения об образовательной организации ИП Анохин А.Д
              </a>
              <div className="space-y-4 mt-4">
                <div className="flex items-center gap-3">
                  <img 
                    src="https://cdn.poehali.dev/projects/bf650be4-a6a0-4d84-b5e4-ff53d5bb9342/files/0cfdba07-d247-40c2-82d8-491b7f81ea67.jpg" 
                    alt="Министерство науки и высшего образования РФ"
                    className="w-12 h-12 object-contain"
                  />
                  <span className="text-xs text-gray-400 leading-tight">Министерство науки и высшего образования РФ</span>
                </div>
                <div className="flex items-center gap-3">
                  <img 
                    src="https://cdn.poehali.dev/projects/bf650be4-a6a0-4d84-b5e4-ff53d5bb9342/files/ca6711d4-4f95-441e-88c0-e5643cd097d2.jpg" 
                    alt="Министерство просвещения РФ"
                    className="w-12 h-12 object-contain"
                  />
                  <span className="text-xs text-gray-400 leading-tight">Министерство просвещения РФ</span>
                </div>
              </div>
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