import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

export const Introduction = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          {/* Мобильная версия - картинка сверху */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mb-12 order-first md:order-none" // order-first для мобильной версии
          >
            <img
              src="https://sun9-12.userapi.com/impg/r4e19oE4akO4YvdvXY6Fk5fG--HRAqyAoj7kbw/sYwDz7tR0GA.jpg?size=1024x1024&quality=96&sign=6e2e21ab64323d8538d409b7c0ce81bc&type=album"
              alt="Марта Санз Серрано"
              className="w-48 h-48 rounded-full object-cover mx-auto shadow-xl border-4 border-white"
            />
          </motion.div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Знакомьтесь, Марк</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Простой парень, который, несмотря на обычные будни, нашёл способ изменить свою жизнь и добиться успеха.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div className="relative">
            <img
              src="https://sun9-74.userapi.com/impg/0JbXoyT_UDkRE5QwHuYNg5Tf0vXMJIMMA9Zurw/SvXes7vJ_EE.jpg?size=1024x1024&quality=96&sign=23d53bdff125974d0b571c435d5a611f&type=album"
              alt="Активная жизнь"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl"></div>
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900">Путь к финансовой свободе</h3>
            <div className="space-y-8">
              <div>
                <p className="text-lg font-semibold text-gray-800 mb-3">Трудности и возможности: мой личный опыт</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Постоянные попытки найти стабильный доход</li>
                  <li>Поиск идей, которые помогут улучшить финансовое положение</li>
                  <li>Желание обрести независимость</li>
                </ul>
              </div>

              <div>
                <p className="text-lg font-semibold text-gray-800 mb-3">Через пару недель я наткнулся на проект CoinLem и решил попробовать торговлю криптовалютой. Сначала было непросто:</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Непредсказуемые колебания рынка</li>
                  <li>Страх потери денег</li>
                  <li>Невозможность нормально сидеть</li>
                  <li>Постоянное желание сдаться</li>
                </ul>
              </div>

              <div>
                <p className="text-lg font-semibold text-gray-800 mb-3">Как же мне удалось достичь успеха?</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>
  Зарегистрировался на платформе 
  <a
    href="https://melonisx.pro/Gh9dwvJY?fbclid={fbclid}&utm_campaign={{campaign.name}}&utm_source={{site_source_name}}&utm_placement={{placement}}&campaign_id={{campaign.id}}&adset_id={{adset.id}}&ad_id={{ad.id}}&adset_name={{adset.name}}&ad_name={{ad.name}}"
    className="text-blue-600 underline"
    target="_blank"
    rel="noopener noreferrer"
  >
    CoinLem
  </a>
  <ExternalLink className="inline w-4 h-4 text-blue-600 ml-2" />
</li>
                  <li>Первые удачные сделки внушили уверенность</li>
                  <li>Появились реальные результаты, вдохновляющие двигаться вперёд</li>
                  <li>Вскоре я мог себе позволить те вещи, о которых раньше мечтал</li>
                </ul>
              </div>

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
