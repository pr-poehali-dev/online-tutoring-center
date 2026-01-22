import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const subjects = [
  { name: 'Математика', icon: 'Calculator', color: 'bg-purple-100 text-purple-600' },
  { name: 'Русский язык', icon: 'BookOpen', color: 'bg-blue-100 text-blue-600' },
  { name: 'Английский язык', icon: 'Languages', color: 'bg-green-100 text-green-600' },
  { name: 'Информатика', icon: 'Code', color: 'bg-indigo-100 text-indigo-600' },
  { name: 'Химия', icon: 'FlaskConical', color: 'bg-orange-100 text-orange-600' },
  { name: 'Биология', icon: 'Leaf', color: 'bg-emerald-100 text-emerald-600' },
  { name: 'Обществознание', icon: 'Users', color: 'bg-pink-100 text-pink-600' }
];

const tariffs = [
  {
    name: 'БАЗОВЫЙ',
    price: '5 400',
    lessons: '4 занятия/мес',
    format: 'Группа до 10 человек',
    duration: '60 минут',
    features: ['Диагностика', 'План на месяц', '1 контрольный срез'],
    popular: false
  },
  {
    name: 'СТАНДАРТ',
    price: '6 200',
    lessons: '8 занятий/мес',
    format: 'Мини-группа 3–5 человек',
    duration: '60 минут',
    features: ['Отчёт раз в 2 недели', 'Контроль домашних заданий', 'Срез прогресса', 'Диагностика и план'],
    popular: true
  },
  {
    name: 'ПРЕМИУМ',
    price: '9 900',
    lessons: '8 занятий/мес',
    format: 'Индивидуально',
    duration: '60 минут',
    features: ['Персональный план', 'Проверка ДЗ', 'Еженедельный отчёт', 'Замена преподавателя', 'Диагностика'],
    popular: false
  }
];

const reviews = [
  {
    name: 'Анна Петрова',
    text: 'Занимаемся уже 3 месяца по математике. Сын стал увереннее решать задачи, оценки улучшились с тройки до четвёрки с плюсом!',
    grade: '9 класс',
    subject: 'Математика'
  },
  {
    name: 'Дмитрий Соколов',
    text: 'Отличная подготовка к ЕГЭ по русскому языку. Преподаватель объясняет сложные темы простым языком, всегда на связи.',
    grade: '11 класс',
    subject: 'Русский язык'
  },
  {
    name: 'Елена Иванова',
    text: 'Очень довольна системой контроля — каждые две недели получаю отчёт о прогрессе дочери. Вижу реальные результаты!',
    grade: '10 класс',
    subject: 'Химия'
  }
];

export default function MainSections() {
  return (
    <>
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-purple-50 via-white to-green-50">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <Badge className="bg-accent text-white">Онлайн-репетиторский центр</Badge>
              <h1 className="text-5xl md:text-6xl font-bold font-montserrat leading-tight">
                Контроль обучения.
                <span className="bg-gradient-to-r from-primary to-purple-700 bg-clip-text text-transparent"> Спокойствие родителей.</span>
              </h1>
              <p className="text-xl text-gray-600">
                Подготовка к ЕГЭ, ОГЭ и ВПР в мини-группах и индивидуально. 
                Регулярные отчёты о прогрессе каждые 2 недели.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-to-r from-primary to-purple-700 hover:shadow-xl transition-all text-lg">
                  <Icon name="Sparkles" className="mr-2" size={20} />
                  Записаться на бесплатное занятие
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-purple-50">
                  <Icon name="Play" className="mr-2" size={20} />
                  Как это работает
                </Button>
              </div>
              <div className="flex gap-8 pt-4">
                <div>
                  <div className="text-3xl font-bold text-primary">500+</div>
                  <div className="text-gray-600">учеников</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent">98%</div>
                  <div className="text-gray-600">довольных родителей</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-purple-600">7</div>
                  <div className="text-gray-600">предметов</div>
                </div>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-accent/10 rounded-full blur-3xl"></div>
              <img 
                src="/placeholder.svg" 
                alt="Обучение" 
                className="relative rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="benefits" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold font-montserrat mb-4">
              Кому подходит обучение в PERFEKZ
            </h2>
            <p className="text-xl text-gray-600">Мы помогаем разным категориям учеников</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: 'Target',
                title: 'Готовятся к ЕГЭ/ОГЭ',
                description: 'Нужна системная подготовка с контролем прогресса и регулярными срезами знаний'
              },
              {
                icon: 'TrendingUp',
                title: 'Хотят улучшить оценки',
                description: 'Пробелы в школьной программе мешают успеваемости — закроем их быстро'
              },
              {
                icon: 'Shield',
                title: 'Родители хотят контроля',
                description: 'Регулярные отчёты и прозрачная система обучения для вашего спокойствия'
              }
            ].map((benefit, idx) => (
              <Card key={idx} className="animate-on-scroll hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-gray-50 to-white">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-purple-700 rounded-2xl flex items-center justify-center mb-4">
                    <Icon name={benefit.icon} className="text-white" size={32} />
                  </div>
                  <CardTitle className="text-2xl font-montserrat">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="subjects" className="py-20 px-4 bg-gradient-to-br from-purple-50 to-white">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold font-montserrat mb-4">
              Предметы для подготовки
            </h2>
            <p className="text-xl text-gray-600">Выберите предмет для бесплатного занятия</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {subjects.map((subject, idx) => (
              <Card 
                key={idx} 
                className="animate-on-scroll hover:scale-105 transition-all duration-300 cursor-pointer border-0 shadow-lg hover:shadow-2xl"
              >
                <CardHeader className="text-center">
                  <div className={`w-20 h-20 ${subject.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                    <Icon name={subject.icon} size={36} />
                  </div>
                  <CardTitle className="text-xl font-montserrat">{subject.name}</CardTitle>
                </CardHeader>
                <CardFooter className="justify-center">
                  <Button variant="ghost" className="text-primary hover:text-purple-700">
                    Подробнее
                    <Icon name="ArrowRight" className="ml-2" size={16} />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="why" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold font-montserrat mb-4">
              Почему PERFEKZ — система контроля результата
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-on-scroll">
              {[
                { icon: 'CheckCircle2', title: 'Регулярные отчёты', text: 'Каждые 2 недели вы получаете подробный отчёт о прогрессе' },
                { icon: 'Target', title: 'Контрольные срезы', text: 'Проверяем знания и корректируем программу обучения' },
                { icon: 'Users', title: 'Мини-группы 3-5 человек', text: 'Внимание каждому ученику, но доступная цена' },
                { icon: 'Clock', title: 'Гибкий график', text: 'Занятия можно переносить при предупреждении за 24 часа' }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 items-start">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name={item.icon} className="text-accent" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold font-montserrat mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="relative animate-on-scroll">
              <div className="absolute -top-6 -right-6 w-full h-full bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl"></div>
              <img src="/placeholder.svg" alt="Контроль" className="relative rounded-3xl shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      <section id="tariffs" className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold font-montserrat mb-4">
              Тарифы и цены
            </h2>
            <p className="text-xl text-gray-600">Выберите удобный формат обучения</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {tariffs.map((tariff, idx) => (
              <Card 
                key={idx} 
                className={`animate-on-scroll relative border-2 ${
                  tariff.popular ? 'border-primary shadow-2xl scale-105' : 'border-gray-200'
                } transition-all duration-300 hover:shadow-xl`}
              >
                {tariff.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-primary to-purple-700 text-white px-4 py-1">
                      Популярный
                    </Badge>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl font-montserrat mb-2">{tariff.name}</CardTitle>
                  <div className="text-5xl font-bold text-primary mb-4">
                    {tariff.price} ₽
                    <span className="text-lg text-gray-500 font-normal">/мес</span>
                  </div>
                  <CardDescription className="text-lg">{tariff.lessons}</CardDescription>
                  <div className="text-gray-600 mt-2">
                    <div>{tariff.format}</div>
                    <div>{tariff.duration}</div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {tariff.features.map((feature, fidx) => (
                      <li key={fidx} className="flex items-center gap-2">
                        <Icon name="Check" className="text-accent flex-shrink-0" size={20} />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button 
                    className={`w-full ${
                      tariff.popular 
                        ? 'bg-gradient-to-r from-primary to-purple-700' 
                        : 'bg-white text-primary border-2 border-primary hover:bg-purple-50'
                    }`}
                  >
                    Выбрать тариф
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold font-montserrat mb-4">
              Отзывы наших учеников
            </h2>
            <p className="text-xl text-gray-600">Что говорят родители и ученики</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, idx) => (
              <Card key={idx} className="animate-on-scroll border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-purple-700 rounded-full flex items-center justify-center text-white font-bold">
                      {review.name[0]}
                    </div>
                    <div>
                      <CardTitle className="text-lg">{review.name}</CardTitle>
                      <CardDescription>{review.grade} • {review.subject}</CardDescription>
                    </div>
                  </div>
                  <div className="flex gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Icon key={i} name="Star" className="text-yellow-400 fill-yellow-400" size={16} />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 italic">"{review.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
