interface Formula {
  id: string;
  problem: string;
  formula: string;
  imageUrl: string;
  level: string;
}

export const formulas: Formula[] = [
  {
    id: '1',
    problem: '2次方程式の解の公式は？',
    formula: 'x = -b ± √(b² - 4ac) / 2a',
    imageUrl: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=400',
    level: '初級'
  },
  {
    id: '2',
    problem: '三角形の面積の公式は？',
    formula: 'S = (1/2)ah',
    imageUrl: 'https://images.unsplash.com/photo-1647427060118-4911c9821b82?auto=format&fit=crop&q=80&w=400',
    level: '初級'

  },
  {
    id: '3',
    problem: '三平方の定理は？',
    formula: 'a² + b² = c²',
    imageUrl: 'https://images.unsplash.com/photo-1648737963030-73f24b16b441?auto=format&fit=crop&q=80&w=400',
    level: '初級'
  },
  {
    id: '4',
    problem: '円の面積の公式は？',
    formula: 'S = πr²',
    imageUrl: 'https://images.unsplash.com/photo-1649943075763-ad7c35870c3f?auto=format&fit=crop&q=80&w=400',
    level: '初級'
  },
  {
    id: '5',
    problem: '相似比と面積比の関係は？',
    formula: 'S₁:S₂ = k²',
    imageUrl: 'https://images.unsplash.com/photo-1648737963503-1a26da876aca?auto=format&fit=crop&q=80&w=400',
    level: '初級'
  },
  {
    id: '6',
    problem: '等差数列の和の公式は？',
    formula: 'Sn = n(a₁ + aₙ)/2',
    imageUrl: 'https://images.unsplash.com/photo-1648737963540-306235c8170e?auto=format&fit=crop&q=80&w=400',
    level: '初級'
  },
  {
    id: '7',
    problem: '等比数列の和の公式は？',
    formula: 'Sn = a(1-rⁿ)/(1-r)',
    imageUrl: 'https://images.unsplash.com/photo-1648737962619-16e5cd465d2b?auto=format&fit=crop&q=80&w=400',
    level: '初級'
  },
  {
    id: '8',
    problem: '三角比の相互関係は？',
    formula: 'sin²θ + cos²θ = 1',
    imageUrl: 'https://images.unsplash.com/photo-1648737962984-329ed8aba72d?auto=format&fit=crop&q=80&w=400',
    level: '初級'
  },
  {
    id: '9',
    problem: '対数の性質は？',
    formula: 'log_a(MN) = log_aM + log_aN',
    imageUrl: 'https://images.unsplash.com/photo-1648737963030-73f24b16b441?auto=format&fit=crop&q=80&w=400',
    level: '初級'
  },
  {
    id: '10',
    problem: '微分の公式は？',
    formula: '(x^n)′ = nx^(n-1)',
    imageUrl: 'https://images.unsplash.com/photo-1648737962847-1a2403bcb19e?auto=format&fit=crop&q=80&w=400',
    level: '初級'
  },
  {
    id: '11',
    problem: '正弦定理の公式は？',
    formula: 'a/sinA=b/sinB=c/sinC=2R	',
    imageUrl: 'https://images.unsplash.com/photo-1836450923847-a7b4c9e2f1d3?auto=format&fit=crop&q=80&w=400',
    level: '初級'
  },
  {
    id: '12',
    problem: '余弦定理の公式は？',
    formula: 'c^2=a^2+b^2-2abcosC	',
    imageUrl: 'https://images.unsplash.com/photo-1629483017562-f3e6d1b0a5c7?auto=format&fit=crop&q=80&w=400',
    level: '初級'
  },
  {
    id: '13',
    problem: '三角比を用いた三角形の面積の公式は？',
    formula: 'S=bcsinA/2',
    imageUrl: 'https://images.unsplash.com/photo-1948203756123-d8c5b1e0a9f2?auto=format&fit=crop&q=80&w=400',
    level: '初級'
  },
  {
    id: '14',
    problem: '三角形の面積の公式(ヘロンの公式)は？',
    formula: 'S=√(s(s-a)(s-b)(s-c))',
    imageUrl: 'https://images.unsplash.com/photo-1758392045876-e1f7a4b6c0d3?auto=format&fit=crop&q=80&w=400',
    level: '初級'
  },
  {
    id: '15',
    problem: '三角形の内接円と面積の公式は？',
    formula: 'S=r(a+b+c)/2',
    imageUrl: 'https://images.unsplash.com/photo-1682940375129-c9a2f8e5d0b1?auto=format&fit=crop&q=80&w=400',
    level: '初級'
  },
  {
    id: '16',
    problem: '順列は？',
    formula: 'nPr=n!/(n-r)!',
    imageUrl: 'https://images.unsplash.com/photo-1537482093845-b6d3e9a1c0f7?auto=format&fit=crop&q=80&w=400',
    level: '初級'
  },
  {
    id: '17',
    problem: '円順列は？',
    formula: '(n-1)!',
    imageUrl: 'https://images.unsplash.com/photo-1875932018472-f0e4a9c3d7b2?auto=format&fit=crop&q=80&w=400',
    level: '初級'
  },
  {
    id: '18',
    problem: 'じゅず順列は？',
    formula: '(n-1)!/2',
    imageUrl: 'https://images.unsplash.com/photo-1928475603928-d5b1c8a0f7e2?auto=format&fit=crop&q=80&w=400',
    level: '初級'
  },
  {
    id: '19',
    problem: '重複順列は？',
    formula: 'n^r',
    imageUrl: 'https://images.unsplash.com/photo-1649283746102-a3f9d0b7c5e1?auto=format&fit=crop&q=80&w=400',
    level: '初級'
  },
  {
    id: '20',
    problem: '組み合わせは？',
    formula: 'nCr=nPr/r!',
    imageUrl: 'https://images.unsplash.com/photo-1783946502837-c6e1a4b9d0f3?auto=format&fit=crop&q=80&w=400',
    level: '初級'
  },
  {
    id: '21',
    problem: '重複組み合わせは？',
    formula: 'nHr=n+r−1Cr',
    imageUrl: 'https://images.unsplash.com/photo-1567382910456-e7f2c0b1d9a4?auto=format&fit=crop&q=80&w=400',
    level: '初級'
  },
  {
    id: '22',
    problem: '反復試行の確率は？',
    formula: 'nCr(P^r)(1−p)^(n-r)',
    imageUrl: 'https://images.unsplash.com/photo-1982736450912-b9d0f3a7e6c1?auto=format&fit=crop&q=80&w=400',
    level: '初級'
  },
  {
    id: '23',
    problem: '条件つき確率は？',
    formula: 'PA(B)=P(A∩B)/P(A)',
    imageUrl: 'https://images.unsplash.com/photo-1438572093847-a5c1e9d0f7b3?auto=format&fit=crop&q=80&w=400',
    level: '初級'
  },
  {
    id: '24',
    problem: '確率の乗法定理は？',
    formula: 'P(A∩B)=P(A)PA(B)',
    imageUrl: 'https://images.unsplash.com/photo-1892736451023-f1e0c8b7a3d9?auto=format&fit=crop&q=80&w=400',
    level: '初級'
  },
  {
    id: '25',
    problem: '2次方程式の解と係数の関係は？',
    formula: 'α+β=-b/a , αβ=c/a',
    imageUrl: 'https://images.unsplash.com/photo-1764829304756-d3b0a7f6e1c9?auto=format&fit=crop&q=80&w=400',
    level: '初級'
  },  
  {
    id: '26',
    problem: '点と直線の距離は？',
    formula: 'd=|ax1+by1+c|/√a^2+b^2',
    imageUrl: 'https://images.unsplash.com/photo-1529384756012-e0a4f9b1c7d3?auto=format&fit=crop&q=80&w=400',
    level: '初級'
  },
  {
    id: '27',
    problem: '円の方程式は？',
    formula: '(x-a)^2+(y-b)^2=r^2',
    imageUrl: 'https://images.unsplash.com/photo-1983745609283-b7c3d9a0f1e6?auto=format&fit=crop&q=80&w=400',
    level: '初級'
  },
  {
    id: '28',
    problem: '加法定理は？',
    formula: 'sin(α±β)=sinαcosβ±cosαsinβ',
    imageUrl: 'https://images.unsplash.com/photo-1638492057613-c8e5a1b7f3d0?auto=format&fit=crop&q=80&w=400',
    level: '初級'
  },
  {
    id: '29',
    problem: '三角関数の合成は？',
    formula: 'asinθ+bcosθ=(√a^2+b^2)sin(θ+α)',
    imageUrl: 'https://images.unsplash.com/photo-1859302745618-a9d0f7c1e3b5?auto=format&fit=crop&q=80&w=400',
    level: '初級'
  },
  {
    id: '30',
    problem: '接線の方程式は？',
    formula: 'y-f(a)=f´(a)(x-a)',
    imageUrl: 'https://images.unsplash.com/photo-1492837560921-f6e1b0d9a3c7?auto=format&fit=crop&q=80&w=400',
    level: '初級'
  },
  {
    id: '31',
    problem: '法線の方程式は？',
    formula: 'y-f(a)=-1/(f´(a)) (x-a)',
    imageUrl: 'https://images.unsplash.com/photo-1728493057612-b3d7e0c9a1f5?auto=format&fit=crop&q=80&w=400',
    level: '初級'
  },
  {
    id: '32',
    problem: '不定積分の公式は？',
    formula: '∫f(x)dx=F(x)+C',
    imageUrl: 'https://images.unsplash.com/photo-1902837465019-a0c1f6e9d3b7?auto=format&fit=crop&q=80&w=400',
    level: '初級'
  },
  {
    id: '33',
    problem: '定積分の公式は？',
    formula: '∫[a,b]f(x)dx=[F(x)][a,b]=F(b)-F(a)',
    imageUrl: 'https://images.unsplash.com/photo-1657382940672-e9b1a4f3c0d7?auto=format&fit=crop&q=80&w=400',
    level: '初級'
  },
  {
    id: '34',
    problem: '積分を使った面積の求め方は？',
    formula: '∫[a,b](x-a)(x-b)dx=-(β-α)^3/6',
    imageUrl: 'https://images.unsplash.com/photo-1483759203845-d0f7c3b9e1a5?auto=format&fit=crop&q=80&w=400',
    level: '初級'
  },
  {
    id: '35',
    problem: '等差数列の一般項は？',
    formula: 'an=a1+(n-1)d',
    imageUrl: 'https://images.unsplash.com/photo-1592837461058-c6e0b7d1f9a3?auto=format&fit=crop&q=80&w=400',
    level: '初級'
  },
  {
    id: '36',
    problem: '等比数列の一般項は？',
    formula: 'an=a1r^(n-1)',
    imageUrl: 'https://images.unsplash.com/photo-1938475609283-b5a1f0e7c3d9?auto=format&fit=crop&q=80&w=400',
    level: '初級'
  },
  {
    id: '37',
    problem: '数列の和(Σ(k=1 , n)k)の一般項は？',
    formula: 'Σ(k=1,n)k=n(n+1)/2',
    imageUrl: 'https://images.unsplash.com/photo-1873948502736-f3e9c0b1a7d5?auto=format&fit=crop&q=80&w=400',
    level: '初級'
  },
  {
    id: '38',
    problem: '階差数列(bn=a(n+1)-an)の一般項は？',
    formula: 'an=a1+Σ(k=1,n-1) bk',
    imageUrl: 'https://images.unsplash.com/photo-1617382940561-a7b3d9e0c5f1?auto=format&fit=crop&q=80&w=400',
    level: '初級'
  },
  {
    id: '39',
    problem: '漸化式(a(n+1)=pan+q)の変形は？',
    formula: 'a(n+1)-α=p(an-α)',
    imageUrl: 'https://images.unsplash.com/photo-1827493056871-d9e1f7a3c0b5?auto=format&fit=crop&q=80&w=400',
    level: '初級'
  },
  {
    id: '40',
    problem: '漸化式(pa(n+2)+qa(n+1)+ran=0)の変形は？',
    formula: 'a(n+2)-αa(n+1)=β(a(n+1)-αan)',
    imageUrl: 'https://images.unsplash.com/photo-1957382046583-e0a9c7b3f1d5?auto=format&fit=crop&q=80&w=400',
    level: '初級'
  },
  {
    id:'41',
    problem:'sin75°=?',
    formula:'sin75°=(√2+√6)/2',
    imageUrl:'https://images.unsplash.com/photo-1847293056728-b6e3a7c9d1f0?auto=format&fit=crop&q=80&w=400',
    level:'中級'
  },

  {
    id:'42',
    problem:'sinθ=√3/2 , θ=?',
    formula:'π/3 , 2π/3   (60° , 120°)',
    imageUrl:'https://images.unsplash.com/photo-1629384756103-c8d2f9b5a1e7?auto=format&fit=crop&q=80&w=400',
    level:'中級'
  },
  {
    id:'43',
    problem:'sinθ=2/3 のとき cosθ=? ',
    formula:'(√5)/3',
    imageUrl:'https://images.unsplash.com/photo-1973845609284-e1f0a3d7c6b9?auto=format&fit=crop&q=80&w=400',
    level:'中級'
  },
  {
    id:'44',
    problem:'△ABCにおいて外接円の半径をRとすると、b=4 , B=30° , C=105° のとき a と R を求めよ',
    formula:'4√2',
    imageUrl:'https://images.unsplash.com/photo-1758293045617-f2b7c0a9d5e1?auto=format&fit=crop&q=80&w=400',
    level:'中級'
  },
  {
    id:'45',
    problem:'△ABCにおいて、∠A = 30°、∠B = 45°、辺a=10のとき辺bの長さを求めよ',
    formula:'10√2',
    imageUrl:'https://images.unsplash.com/photo-1682736450921-a5d9f3c1e7b0?auto=format&fit=crop&q=80&w=400',
    level:'中級'
  },
  {
    id:'46',
    problem:'△ABCにおいて、∠A=60°、∠A=40° , 辺b=10  のとき辺aの長さを求めよ',
    formula:'4√6',
    imageUrl:'https://images.unsplash.com/photo-1538472905618-b1e9a6d3c7f0?auto=format&fit=crop&q=80&w=400',
    level:'中級'
  },
  {
    id:'47',
    problem:'△ABCにおいて、辺a=12、c=18、∠C=50°  のとき∠Ａを求めよ',
    formula:'(2/3)sin50°',
    imageUrl:'https://images.unsplash.com/photo-1874928375601-c3f7d0a5b9e1?auto=format&fit=crop&q=80&w=400',
    level:'中級'
  },
  {
    id:'48',
    problem:'△ABC において、辺 a=7、辺 b=5、∠C = 60° のとき、辺 c の長さを求めよ。',
    formula:'c=√39​',
    imageUrl:'https://images.unsplash.com/photo-1928374650917-c3f7d0a5b9e1?auto=format&fit=crop&q=80&w=401',
    level:'中級'
  },
  {
    id:'49',
    problem:'△ABC において、辺 a=8、辺 b=6、辺 c=10 のとき、∠C の大きさを求めよ。',
    formula:'∠C=90°',
    imageUrl:'https://images.unsplash.com/photo-1649203756182-d9a1b3e7f0c6?auto=format&fit=crop&q=80&w=402',
    level:'中級'
  },
  {
    id:'50',
    problem:'△ABC において、辺 b=8、辺 c=10、∠A = 30° のとき、三角形の面積 S を求めよ。',
    formula:'s=20',
    imageUrl:'https://images.unsplash.com/photo-1783928465013-e7c5f1d3a0b9?auto=format&fit=crop&q=80&w=403',
    level:'中級'
  },
  {
    id:'51',
    problem:'△ABC において、辺 b=12、辺 c=15、∠A = 45° のとき、三角形の面積 S を求めよ。',
    formula:'S=90√2​',
    imageUrl:'https://images.unsplash.com/photo-1567382940612-a0b6d9e3c7f1?auto=format&fit=crop&q=80&w=404',
    level:'中級'
  },
  {
    id:'52',
    problem:'三角形の3辺が a=7, b=8, c=9 のとき、三角形の面積 S を求めよ。',
    formula:'S​=6√2',
    imageUrl:'https://images.unsplash.com/photo-1983745608291-f1c3b9a7d0e5?auto=format&fit=crop&q=80&w=405',
    level:'中級'
  },
  {
    id:'53',
    problem:'三角形の3辺が a=6, b=8, c=10 で、内接円の半径が r=2 のとき、三角形の面積 S を求めよ。',
    formula:'S=24​',
    imageUrl:'https://images.unsplash.com/photo-1438729056384-d3e0a9f7b1c5?auto=format&fit=crop&q=80&w=406',
    level:'中級'
  },
  {
    id:'54',
    problem:'2x^2−3x−5=0  この二次方程式を解け。',
    formula:'x=2.5 , −1',
    imageUrl:'https://images.unsplash.com/photo-1892738465012-b9a7f1c0d3e6?auto=format&fit=crop&q=80&w=407',
    level:'中級'
  },
  {
    id:'55',
    problem:'x^2−6x+8=0 この二次方程式を解け。',
    formula:'x=4,2',
    imageUrl:'https://images.unsplash.com/photo-1764829376501-e5d7c1a3b9f0?auto=format&fit=crop&q=80&w=408',
    level:'中級'
  },
  {
    id:'56',
    problem:'半径 r=5 cm の円の面積を求めよ。（π は 3.14 とする）',
    formula:'s=78.5 cm²',
    imageUrl:'https://images.unsplash.com/photo-1529384756019-c1f0b7e9d5a3?auto=format&fit=crop&q=80&w=409',
    level:'中級'
  },
  {
    id:'57',
    problem:'面積が 314 cm² の円の半径 r を求めよ。（π は 3.14 とする）',
    formula:'s=10 cm',
    imageUrl:'https://images.unsplash.com/photo-1983745610928-a3d5f9c7e0b1?auto=format&fit=crop&q=80&w=410',
    level:'中級'
  },
  {
    id:'58',
    problem:'底辺 a=6 cm、高さ b=8 cm の直角三角形において、斜辺 c の長さを求めなさい。',
    formula:'c=10 cm',
    imageUrl:'https://images.unsplash.com/photo-1638492075619-f7b3d0e9c1a5?auto=format&fit=crop&q=80&w=411',
    level:'中級'
  },
  {
    id:'59',
    problem:'二つの相似な三角形があります。小さい三角形の面積が 36 cm²、大きい三角形の面積が 144 cm² です。\r\n このとき、二つの三角形の相似比 k を求めなさい。',
    formula:'k=1/2',
    imageUrl:'https://images.unsplash.com/photo-1638492075619-e9a5b0c3d7f1?auto=format&fit=crop&q=80&w=412',
    level:'中級'
  },
  {
    id:'60',
    problem:'5人の学生（A, B, C, D, E）が、1列に並ぶ方法は何通りですか？',
    formula:'120通り ',
    imageUrl:'https://images.unsplash.com/photo-1859302746512-d0f1c9e7b3a5?auto=format&fit=crop&q=80&w=413',
    level:'上級'
  },
  {
    id:'61',
    problem:'6人の学生（A, B, C, D, E, F）が円形のテーブルに座る場合、何通りの座り方が可能ですか？',
    formula:'120通り ',
    imageUrl:'https://images.unsplash.com/photo-1492837561047-b3e7a9d1f0c5?auto=format&fit=crop&q=80&w=414',
    level:'上級'
  },
  {
    id:'62',
    problem:'3つの異なる珠（赤、青、緑）を使って、じゅず（数珠）のように並べる方法は何通りですか？ただし、じゅずは回転や反転しても同じものとします。',
    formula:'3通り ',
    imageUrl:'https://images.unsplash.com/photo-1728493756012-f9c5d3b7a1e0?auto=format&fit=crop&q=80&w=415',
    level:'上級'
  },
  {
    id:'63',
    problem:'3種類の異なるボール（赤、青、緑）があり、これらのボールを使って4個のボールを並べる方法は何通りありますか？同じ種類のボールを複数回使っても構いません。',
    formula:'81通り ',
    imageUrl:'https://images.unsplash.com/photo-1902837465091-e0d1a3f5c9b7?auto=format&fit=crop&q=80&w=416',
    level:'上級'
  },
  {
    id:'64',
    problem:'8人の中から3人を選んで、グループを作る方法は何通りありますか？',
    formula:'56通り ',
    imageUrl:'https://images.unsplash.com/photo-1657382946012-c7b1e9a5d0f3?auto=format&fit=crop&q=80&w=417',
    level:'中級'
  },
  {
    id:'65',
    problem:'5種類の異なる果物（りんご、バナナ、オレンジ、ぶどう、みかん）があり、これらから3個の果物を選ぶ方法は何通りありますか？同じ果物を複数回選んでもかまいません。',
    formula:'35通り',
    imageUrl:'https://images.unsplash.com/photo-1483759203849-a1f3d7c5e9b0?auto=format&fit=crop&q=80&w=418',
    level:'上級'
  },
  {
    id:'66',
    problem:'サイコロを2回投げるとき、出た目の合計が7になる確率を求めて下さい',
    formula:'1/6​ ',
    imageUrl:'https://images.unsplash.com/photo-1592837461059-d5e9c3b1a7f0?auto=format&fit=crop&q=80&w=419',
    level:'中級'
  },
  {
    id:'67',
    problem:'赤玉5個、青玉4個が入っている袋から、玉を1個取り出し、それをもとに戻さないで、続いてもう1個取り出す。1回目に赤玉が出たとき、2回目も赤玉が出る確率を求めよ。',
    formula:'1/2',
    imageUrl:'https://images.unsplash.com/photo-1938475608293-b0a7f9c1d3e5?auto=format&fit=crop&q=80&w=420',
    level:'上級'
  },
  {
    id:'68',
    problem:'コインを2回投げるとき、1回目で表が出て、2回目でも表が出る確率を求めなさい。',
    formula:'41 ',
    imageUrl:'https://images.unsplash.com/photo-1873948502739-f3d0c7b5a1e9?auto=format&fit=crop&q=80&w=421',
    level:'上級'
  },
  {
    id:'69',
    problem:'次の2次方程式 x^2−5x+6=0 の解と係数の関係より解の和と積をそれぞれ求めなさい。',
    formula:'解の和は 5、解の積は 6 ',
    imageUrl:'https://images.unsplash.com/photo-1617382940651-e7a1b9d3f5c0?auto=format&fit=crop&q=80&w=422',
    level:'中級'
  },
  {
    id:'70',
    problem:'次の3次方程式 x^3−4x^2+5x−2=0 の解と係数の関係より 解の和、解の積、解の2つの積の和それぞれを求めなさい。',
    formula:'解の和： 4	解の積： 2	解の2つの積の和： 5	',
    imageUrl:'https://images.unsplash.com/photo-1827493056782-c5f9d1b3e0a7?auto=format&fit=crop&q=80&w=423',
    level:'上級'
  },
  {
    id:'71',
    problem:'点(2，8)と直線3x-2y+4=0の距離を求めて下さい',
    formula:' 6/√13​​ ',
    imageUrl:'https://images.unsplash.com/photo-1957382046582-d1b7a3e5f9c0?auto=format&fit=crop&q=80&w=424',
    level:'中級'
  },
  {
    id:'72',
    problem:'中心が点 (3,−2) で半径が 5 の円の方程式を求めなさい。',
    formula:'(x−3)2+(y+2)2=5^2=25',
    imageUrl:'https://images.unsplash.com/photo-1748392057612-a9c3f7b0d1e5?auto=format&fit=crop&q=80&w=425',
    level:'中級'
  },
  {
    id:'73',
    problem:'sin(30∘+45∘)　この式を加法定理を使って簡単にしなさい。',
    formula:'(1+√3)/2√2​',
    imageUrl:'https://images.unsplash.com/photo-1629483756018-b5d3e1a9f0c7?auto=format&fit=crop&q=80&w=426',
    level:'上級'
  },
  {
    id:'74',
    problem:'sinθ-cosθ をrsin(θ+α)の形の変形しなさい',
    formula:'sinθ-cosθ=√2sin(θ-π/4)',
    imageUrl:'https://images.unsplash.com/photo-1938475602918-e1f5c9b7a3d0?auto=format&fit=crop&q=80&w=427',
    level:'中級'
  },
  {
    id:'75',
    problem:'次の指数関数の値を求めなさい。(1) 25 の値を求めよ。(2) 34 の値を求めよ。(3) 5x=125 のとき、x の値を求めよ。',
    formula:'(1) 32 (2) 81 (3) x=3 ',
    imageUrl:'https://images.unsplash.com/photo-1758392045619-d3a7b5f0e1c9?auto=format&fit=crop&q=80&w=428',
    level:'中級'
  },
  {
    id:'76',
    problem:'次の対数の値を求めなさい。(1) log₂​8 の値を求めよ。(2) log₅25 の値を求めよ。(3) log₃​81=x のとき、x の値を求めよ。(4) log₃x+log₃(x-2)=1　この方程式を解け',
    formula:'(1) log₂​8=3   (2)  log₅​25=2 (3) x=4  (4) x=3',
    imageUrl:'https://images.unsplash.com/photo-1682940375123-b9e3c1d5a7f0?auto=format&fit=crop&q=80&w=429',
    level:'中級'
  },
  {
    id:'77',
    problem:'曲線 y=x^2+2x+1 上の点 (1,4) における接線の方程式を求めなさい。',
    formula:'y=4x',
    imageUrl:'https://images.unsplash.com/photo-1537482093847-c1d9a5f7b3e0?auto=format&fit=crop&q=80&w=430',
    level:'上級'
  },
  {
    id:'78',
    problem:'曲線 y=x^2 上の点 (1,1) における法線の方程式を求めなさい。',
    formula:'法線の方程式を求めるには、まず接線の傾きを求め、それに垂直な直線の傾きを使います。曲線の微分を求める。曲線 y=x^2 を微分すると、接線の傾きはdy/dx​=2x したがって、点 (1,1) での接線の傾きは 2(1)=2 法線の傾きを求める。法線は接線と垂直なので、傾きは接線の傾き 2 の負の逆数になるので(傾き)=−1/2   点(1,1)、(傾き) −1/2​ を代入すると y−1=(−1/2)​(x−1)  y=(−1/2)x+1/2+1  ,  y=(−1/2)​x+3/2​   答え：法線の方程式は y=(−1/2)x+3/2',
    imageUrl:'https://images.unsplash.com/photo-1875932018476-f7b1e0a3d5c9?auto=format&fit=crop&q=80&w=431',
    level:'上級'
  },
  {
    id:'79',
    problem:'∫(3x^2+2x+1)dx の不定積分を求めて下さい',
    formula:'x^3+x^2+x+C',
    imageUrl:'https://images.unsplash.com/photo-1928475603929-d0f3a9c7b1e5?auto=format&fit=crop&q=80&w=432',
    level:'中級'
  },
  {
    id:'80.',
    problem:'∫[0,2]​(3x^2+2x)dx   この定積分の値を求めなさい。',
    formula:'[x^3+x^2][0,2]=12',
    imageUrl:'https://images.unsplash.com/photo-1649283746103-a5c7d9b3f1e0?auto=format&fit=crop&q=80&w=433',
    level:'中級'
  },
  {
    id:'81',
    problem:' y=x2 と直線 y=4 で囲まれる部分の面積を求めよ',
    formula:' y=x^2 と y=4 の交点を求める交点は x=±2 したがって、積分範囲は x=−2 から x=2 まで。面積は、上の関数 y=4 から下の関数 y=x^2 を引いた積分：∫[−2,2]​(4−x^2)dx=​ [4x−3x3​][−2,2​]=(4(2)−323​)−(4(−2)−3(−2)3​) =(8−38​)−(−8+38​) =(324​−38​)−(−324​+38​) =316​+316​=332​',
    imageUrl:'https://images.unsplash.com/photo-1783946502838-e3b0f9d1a5c7?auto=format&fit=crop&q=80&w=433',
    level:'中級'
  },
  {
    id:'82',
    problem:'数列 2,6,10,14,18,… の一般項を求めなさい',
    formula:'数列 2,6,10,14,18,… の場合、初項 a1​=2、公差 d=4 なので、an​=2+(n−1)×4 =2+4n−4 =4n−2  答え： an​=4n−2',
    imageUrl:'https://images.unsplash.com/photo-1567382910457-c9d7a3e5b1f0?auto=format&fit=crop&q=80&w=433',
    level:'中級'
  },
  {
    id:'83',
    problem:'数列 2,6,10,14,18 の和を求めなさい。',
    formula:'初項 a1​=2、末項 a5​=18、項数 n=5  S5​=25​×(2+18) =25​×20​=50',
    imageUrl:'https://images.unsplash.com/photo-1982736450913-b1f0c3d9a7e5?auto=format&fit=crop&q=80&w=433',
    level:'中級'
  },
  {
    id:'84',
    problem:'数列 5,10,20,40,… の一般項を求めなさい',
    formula:'初項 a1​=5、公比 r=2 なので、an​=5×2^(n−1)',
    imageUrl:'https://images.unsplash.com/photo-1438572093849-f5d3a9b7c1e0?auto=format&fit=crop&q=80&w=433',
    level:'中級'
  },
  {
    id:'85',
    problem:'初項 3、公比 2、項数 5 の等比数列の和をもとめなさい',
    formula:'S5​=3(1−2^5)​ /(1−2)=-3(1−32)​=−3(−31)​ =93',
    imageUrl:'https://images.unsplash.com/photo-1438572093849-f5d3a9b7c1e0?auto=format&fit=crop&q=80&w=433',
    level:'中級'
  },
  {
    id:'86',
    problem:'階差数列 bn​=an+1​−an​ を用いて、bn​=4 であり、初項 a1​=5 のとき、an​ を求めなさい。',
    formula:'階差が一定なので、bn​=4 は定数です。したがって、一般項は次のように求められます。a(n+1)​−an​=4  よって  an​=a1​+4(n−1)  初項 a1​=5 を代入して、an​=5+4(n−1)=5+4n−4=4n+1  答え： an​=4n+1',
    imageUrl:'https://images.unsplash.com/photo-1764829304757-e0b9f7d5c3a1?auto=format&fit=crop&q=80&w=433',
    level:'上級'
  },
  {
    id:'87',
    problem:'漸化式 an+1​=2an​+3、初項 a1​=4 のとき、an​ を求めなさい。',
    formula:'a(n+1)=2an+3 より x=2x+3 の解は x=-3 , よって a(n+1)+3=2(an+3) , an+3=bnとおくと b(n+1)=2bn ,又b1=a1+3=4+3=7 , よって bn=7*2^(n-1)',
    imageUrl:'https://images.unsplash.com/photo-1529384756013-d1a3c7b5f0e9?auto=format&fit=crop&q=80&w=433',
    level:'上級'
  },
  {
    id:'88',
    problem:'a1=0 , a2=1 , a(n+2)=a(n+1)+6an のとき一般項{an}を求めなさい',
    formula:'a(n+2)=a(n+1)+6anを変形して a(n+2)-a(n+1)-an=0 とする  この式よりx^2-x-6=0を解くとx=3 , -2 となる  α=-2 , β=3 として a(n+2)+2a(n+1)=3(a(n+1)+2an) ・・・⓵ , a(n+2)-3a(n+1)=-2(a(n+1)-3an) ・・・⓶  とおく  ⓵より a(n+1)+2an=bn とおくと b(n+1)=3bn , b1=a2+2a1=1  よってbn=3^(n-1)・・・⓷   a(n+1)-3an=cnとおくとc(n+1)= -2cn , c1=a2-3a1=1  よってcn=(-2)^(n-1)・・・⓸   ⓷⓸よりan=(1/5)(3^(n-1)-(-2)^(n-1))',
    imageUrl:'https://images.unsplash.com/photo-1983745609284-b5e1d9c3a7f0?auto=format&fit=crop&q=80&w=433',
    level:'上級'
  },
];
