interface Formula {
  id: string;
  problem: string;
  formula: string;
  imageUrl: string;
}

export const formulas: Formula[] = [
  {
    id: '1',
    problem: '2次方程式の解の公式は？',
    formula: 'x = -b ± √(b² - 4ac) / 2a',
    imageUrl: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: '2',
    problem: '三角形の面積の公式は？',
    formula: 'S = (1/2)ah',
    imageUrl: 'https://images.unsplash.com/photo-1647427060118-4911c9821b82?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: '3',
    problem: '三平方の定理は？',
    formula: 'a² + b² = c²',
    imageUrl: 'https://images.unsplash.com/photo-1648737963030-73f24b16b441?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: '4',
    problem: '円の面積の公式は？',
    formula: 'S = πr²',
    imageUrl: 'https://images.unsplash.com/photo-1649943075763-ad7c35870c3f?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: '5',
    problem: '相似比と面積比の関係は？',
    formula: 'S₁:S₂ = k²',
    imageUrl: 'https://images.unsplash.com/photo-1648737963503-1a26da876aca?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: '6',
    problem: '等差数列の和の公式は？',
    formula: 'Sn = n(a₁ + aₙ)/2',
    imageUrl: 'https://images.unsplash.com/photo-1648737963540-306235c8170e?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: '7',
    problem: '等比数列の和の公式は？',
    formula: 'Sn = a(1-rⁿ)/(1-r)',
    imageUrl: 'https://images.unsplash.com/photo-1648737962619-16e5cd465d2b?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: '8',
    problem: '三角比の相互関係は？',
    formula: 'sin²θ + cos²θ = 1',
    imageUrl: 'https://images.unsplash.com/photo-1648737962984-329ed8aba72d?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: '9',
    problem: '対数の性質は？',
    formula: 'log_a(MN) = log_aM + log_aN',
    imageUrl: 'https://images.unsplash.com/photo-1648737963030-73f24b16b441?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: '10',
    problem: '微分の公式は？',
    formula: '(x^n)′ = nx^(n-1)',
    imageUrl: 'https://images.unsplash.com/photo-1648737962847-1a2403bcb19e?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: '11',
    problem: '正弦定理の公式は？',
    formula: 'a/sinA=b/sinB=c/sinC=2R	',
    imageUrl: 'https://images.unsplash.com/photo-1836450923847-a7b4c9e2f1d3?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: '12',
    problem: '余弦定理の公式は？',
    formula: 'c^2=a^2+b^2-2abcosC	',
    imageUrl: 'https://images.unsplash.com/photo-1629483017562-f3e6d1b0a5c7?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: '13',
    problem: '三角形の面積は？',
    formula: 'S=bcsinA/2',
    imageUrl: 'https://images.unsplash.com/photo-1948203756123-d8c5b1e0a9f2?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: '14',
    problem: '三角形の面積(ヘロンの公式)は？',
    formula: 'S=√(s(s-a)(s-b)(s-c))',
    imageUrl: 'https://images.unsplash.com/photo-1758392045876-e1f7a4b6c0d3?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: '15',
    problem: '三角形の内接円と面積の公式は？',
    formula: 'S=r(a+b+c)/2',
    imageUrl: 'https://images.unsplash.com/photo-1682940375129-c9a2f8e5d0b1?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: '16',
    problem: '順列は？',
    formula: 'nPr=n!/(n-r)!',
    imageUrl: 'https://images.unsplash.com/photo-1537482093845-b6d3e9a1c0f7?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: '17',
    problem: '円順列は？',
    formula: '(n-1)!',
    imageUrl: 'https://images.unsplash.com/photo-1875932018472-f0e4a9c3d7b2?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: '18',
    problem: 'じゅず順列は？',
    formula: '(n-1)!/2',
    imageUrl: 'https://images.unsplash.com/photo-1928475603928-d5b1c8a0f7e2?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: '19',
    problem: '重複順列は？',
    formula: 'n^r',
    imageUrl: 'https://images.unsplash.com/photo-1649283746102-a3f9d0b7c5e1?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: '20',
    problem: '組み合わせは？',
    formula: 'nCr=nPr/r!',
    imageUrl: 'https://images.unsplash.com/photo-1783946502837-c6e1a4b9d0f3?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: '21',
    problem: '重複組み合わせは？',
    formula: 'nHr=n+r−1Cr',
    imageUrl: 'https://images.unsplash.com/photo-1567382910456-e7f2c0b1d9a4?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: '22',
    problem: '反復試行の確率は？',
    formula: 'nCr(P^r)(1−p)^(n-r)',
    imageUrl: 'https://images.unsplash.com/photo-1982736450912-b9d0f3a7e6c1?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: '23',
    problem: '条件つき確率は？',
    formula: 'PA(B)=P(A∩B)/P(A)',
    imageUrl: 'https://images.unsplash.com/photo-1438572093847-a5c1e9d0f7b3?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: '24',
    problem: '確率の乗法定理は？',
    formula: 'P(A∩B)=P(A)PA(B)',
    imageUrl: 'https://images.unsplash.com/photo-1892736451023-f1e0c8b7a3d9?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: '25',
    problem: '2次方程式の解と係数の関係の公式は？',
    formula: 'α+β=-b/a , αβ=c/a',
    imageUrl: 'https://images.unsplash.com/photo-1764829304756-d3b0a7f6e1c9?auto=format&fit=crop&q=80&w=400'
  },  
  {
    id: '26',
    problem: '点と直線の距離の公式は？',
    formula: '|ax1+by1+c|/√a^2+b^2',
    imageUrl: 'https://images.unsplash.com/photo-1529384756012-e0a4f9b1c7d3?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: '27',
    problem: '円の方程式は？',
    formula: '(x-a)^2+(y-b)^2=r^2',
    imageUrl: 'https://images.unsplash.com/photo-1983745609283-b7c3d9a0f1e6?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: '28',
    problem: '加法定理は？',
    formula: 'sin(α±β)=sinαcosβ±cosαsinβ',
    imageUrl: 'https://images.unsplash.com/photo-1638492057613-c8e5a1b7f3d0?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: '29',
    problem: '三角関数の合成は？',
    formula: 'asinθ+bcosθ=(√a^2+b^2)sin(θ+α)',
    imageUrl: 'https://images.unsplash.com/photo-1859302745618-a9d0f7c1e3b5?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: '30',
    problem: '接線の方程式は？',
    formula: 'y-f(a)=f´(a)(x-a)',
    imageUrl: 'https://images.unsplash.com/photo-1492837560921-f6e1b0d9a3c7?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: '31',
    problem: '法線の方程式は？',
    formula: 'y-f(a)=-1/(f´(a)) (x-a)',
    imageUrl: 'https://images.unsplash.com/photo-1728493057612-b3d7e0c9a1f5?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: '32',
    problem: '不定積分の公式は？',
    formula: '∫f(x)dx=F(x)+C',
    imageUrl: 'https://images.unsplash.com/photo-1902837465019-a0c1f6e9d3b7?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: '33',
    problem: '定積分の公式は？',
    formula: '∫[a,b]f(x)dx=[F(x)][a,b]=F(b)-F(a)',
    imageUrl: 'https://images.unsplash.com/photo-1657382940672-e9b1a4f3c0d7?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: '34',
    problem: '積分を使った面積の求め方は？',
    formula: '∫[a,b](x-a)(x-b)dx=-(β-α)^3/6',
    imageUrl: 'https://images.unsplash.com/photo-1483759203845-d0f7c3b9e1a5?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: '35',
    problem: '等差数列の一般項は？',
    formula: 'an=a1+(n-1)d',
    imageUrl: 'https://images.unsplash.com/photo-1592837461058-c6e0b7d1f9a3?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: '36',
    problem: '等比数列の一般項は？',
    formula: 'an=a1r^(n-1)',
    imageUrl: 'https://images.unsplash.com/photo-1938475609283-b5a1f0e7c3d9?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: '37',
    problem: '数列の和(Σ(k=1 , n)k)の一般項は？',
    formula: 'Σ(k=1,n)k=n(n+1)/2',
    imageUrl: 'https://images.unsplash.com/photo-1873948502736-f3e9c0b1a7d5?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: '38',
    problem: '階差数列(bn=a(n+1)-an)の一般項は？',
    formula: 'an=a1+Σ(k=1,n-1) bk',
    imageUrl: 'https://images.unsplash.com/photo-1617382940561-a7b3d9e0c5f1?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: '39',
    problem: '漸化式(a(n+1)=pan+q)の変形は？',
    formula: 'a(n+1)-α=p(an-α)',
    imageUrl: 'https://images.unsplash.com/photo-1827493056871-d9e1f7a3c0b5?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: '40',
    problem: '漸化式(pa(n+2)+qa(n+1)+ran=0)',
    formula: 'a(n+2)-αa(n+1)=β(a(n+1)-αan)',
    imageUrl: 'https://images.unsplash.com/photo-1957382046583-e0a9c7b3f1d5?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: '41',
    problem: '',
    formula: '',
    imageUrl: ''
  },
  {
    id: '42',
    problem: '',
    formula: '',
    imageUrl: ''
  },


];
