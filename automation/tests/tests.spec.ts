import { test, expect } from '@playwright/test';

const parameters = [
  -5, 0, 500, 999, 1000, 1001, 1500, 9999, 10000, 100000, 999999, 1000000, 1000000000, 1000000000000,
];

const counterSelectors = {
  water: '#app > div > div:nth-child(3) > div > div > div > div > div:nth-child(3) > div > div.desktop-impact-items-F7T6E > div:nth-child(4)',
  co2: '#app > div > div:nth-child(3) > div > div > div > div > div:nth-child(3) > div > div.desktop-impact-items-F7T6E > div:nth-child(2)',
  energy: '#app > div > div:nth-child(3) > div > div > div > div > div:nth-child(3) > div > div.desktop-impact-items-F7T6E > div:nth-child(6)'
};

// Функция для генерации JSON ответа на основе переданного параметра
function generateMockResponse(value: number): string {
  return JSON.stringify({
    result: {
      blocks: {
        personalImpact: {
          data: {
            co2: value,
            energy: value,
            water: value,
            materials: 0,
            pineYears: 0,
          }
        }
      },
      status: "ok"
    }
  });
}

// Обертка для тестов каждого счётчика
function registerTestsForCounter(value: number, counterKey: string, selector: string) {
  test.describe(`Tests for ${counterKey} counter with value = ${value}`, () => {
    test.beforeEach(async ({ page }) => {
      await page.route('**/web/1/charity/ecoImpact/init', route => route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: generateMockResponse(value)
      }));
      await page.goto('https://www.avito.ru/avito-care/eco-impact');
    });

    test(`Check if ${counterKey} counter is shown correctly`, async ({ page }) => {
      await expect(page.locator(selector)).toHaveScreenshot(["output", `${counterKey}_${value}.png`]);
    });
  });
}

// Регистрация тестов для всех параметров и счетчиков
for (const value of parameters) {
  for (const [key, selector] of Object.entries(counterSelectors)) {
    registerTestsForCounter(value, key, selector);
  }
}
