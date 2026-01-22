import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function Navigation() {
  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-br from-primary to-purple-700 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xl">P</span>
          </div>
          <span className="text-2xl font-bold font-montserrat bg-gradient-to-r from-primary to-purple-700 bg-clip-text text-transparent">
            PERFEKZ
          </span>
        </div>
        <div className="hidden md:flex gap-8">
          <a href="#subjects" className="text-gray-600 hover:text-primary transition-colors">Предметы</a>
          <a href="#tariffs" className="text-gray-600 hover:text-primary transition-colors">Тарифы</a>
          <a href="#reviews" className="text-gray-600 hover:text-primary transition-colors">Отзывы</a>
          <a href="#contacts" className="text-gray-600 hover:text-primary transition-colors">Контакты</a>
        </div>
        <Button className="bg-gradient-to-r from-primary to-purple-700 hover:shadow-lg transition-shadow">
          <Icon name="MessageCircle" className="mr-2" size={18} />
          Записаться
        </Button>
      </div>
    </nav>
  );
}
