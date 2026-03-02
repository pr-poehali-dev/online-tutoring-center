import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

export default function Documents() {
  return (
    <div className="min-h-screen bg-background">
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="container mx-auto max-w-6xl px-4 py-4">
          <Link to="/education-info" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
            <Icon name="ArrowLeft" size={20} />
            <span className="font-medium">Назад к разделам</span>
          </Link>
        </div>
      </header>

      <main className="container mx-auto max-w-4xl px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-foreground">
          Документы
        </h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600"><a href="http://perfekz.ru/docs/docs/1)%20%D0%A1%D0%B2%D0%B5%D0%B4%D0%B5%D0%BD%D0%B8%D0%B5%20%D0%BE%D0%B1%20%D0%98%D0%9F.pdf">Выписка
из Единого государственного реестра индивидуальных предпринимателей
/a></p><br>
          <p className="text-gray-600"><a href="">Правила внутреннего распорядка обучающихся ПЕРФЕКЗ</a></p><br>
          <p className="text-gray-600"><a href="">Правила приема обучающихся</a></p><br>
          <p className="text-gray-600"><a href="">ПОРЯДОК возникновения, приостановления и прекращения отношений</a></p><br>
          <p className="text-gray-600"><a href="">Положение об оказании платных образовательных услуг</a></p><br>
          <p className="text-gray-600"><a href="">Положение о режиме занятий обучающихся</a></p><br>
          <p className="text-gray-600"><a href="">Правила внутреннего трудового распорядка</a></p><br>
          <p className="text-gray-600"><a href="">ПОЛОЖЕНИЕ О формах, периодичности и порядке текущего контроля успеваемости, промежуточной аттестации обучающихся  
</a></p><br>
          <p className="text-gray-600"><a href="">Положение о порядке и основаниях для перевода, отчисления воспитанников</a></p><br>
          <p className="text-gray-600"><a href="">Оферта о заключении договора возмездного оказания образовательных услуг</a></p><br>
        </div>
      </main>
    </div>
  );
}