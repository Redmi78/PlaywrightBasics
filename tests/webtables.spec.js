const{test,expect}=require('@playwright/test');

test('Web Tables Test',async({page})=>{ 

    await page.goto('https://testautomationpractice.blogspot.com/');

    await page.locator("#productTable");
    //1 total numbers of colums and rows
    const colums = await page.locator("#productTable thead tr th").count();
    console.log("No of colums:",colums);
    const rows = await page.locator("#productTable tbody tr");


    //2 select checkbox of projec 4

// const matchRow = rows.filter({
//   has: page.locator('td'),
//   hasText: 'Smartphone'
// });
// await matchRow.first().getByRole('checkbox').check();

//3 resuable function to select product
// await selectProduct(rows,page,'Smartphone');
// await page.waitForTimeout(5000);
// await selectProduct(rows,page,'Smartwatch');
// await page.waitForTimeout(5000);

// async function selectProduct(rows,page,productName){
// const matchRow = rows.filter({
//   has: page.locator('td'),
//   hasText: productName
// });
// await matchRow.locator("input[type='checkbox']").check();
// }

// 4 print all the rows and colums data
// const totalRows = await rows.count();

// for(let i=0;i<totalRows;i++){
// const row = rows.nth(i);
// const tds = row.locator("td");
// for(let j=1;j<=await tds.count()-1;j++){

//     await page.waitForTimeout(1000);
//  console.log( await tds.nth(j).textContent());
// }
// }

//5 read all pages data from the table
const pagination=page.locator(".pagination li a");
const totalPages = await pagination.count();
for(let p=1;p<totalPages-1;p++){
   if(p>1){
    await pagination.nth(p).click();
   }
    const totalRows = await rows.count();
for(let i=0;i<totalRows;i++){
const row = rows.nth(i);
const tds = row.locator("td");
for(let j=1;j<=await tds.count()-1;j++){

     await page.waitForTimeout(5000);
  console.log( await tds.nth(j).textContent());
 }
 }
}

});